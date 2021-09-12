const {Product,Category,Size,Type,Cart,Image} = require ("../database/models");
const {Op} = require ("sequelize");
const {like} = Op;

const fs = require("fs");
const path = require("path")

const productsController = {
    showDetail: async (req,res) => {
        try {
            const category = await Category.findOne({
                where: {categoryName: {
                    [like] : req.params.category}
                }
            })
            const related = await Product.findAll({
                include:["type","category","sizes","images"], 
                where:{ categoryId: category.id }
            });

            const show = await Product.findByPk(req.params.id,{
                include:["type","category","sizes","images"]
            })

            return res.render('products/productDetail', {
                product: show,
                styles: ["/css/mainAlmacenProductDetail.css", "/css/mainGourmetProductDetail.css", "/css/mainCosmeticaProductDetail.css"],
                products: related,
                title: show.name              
            });
        } catch (error) {
            return res.send(error)
        }

    },
    category: async (req, res) =>{
        if(req.query.query != undefined){
            try {
                const results = await Product.findAll({include:["type","category","sizes","images"], where: {name: {[like] : `%${req.query.query}%`}}})
                return res.render("products/category", {
                    products: results,
                    styles: ["/css/main-category.css"],
                    title: req.query.query
                })
            } catch (error) {
                return res.send(error)
            }
        }else{
            try {
                const category = await Category.findOne({where: {categoryName: {[like] : req.params.category}}})
                const productByCategory = await Product.findAll({include:["type","category","sizes","images"], where:{ categoryId: category.id }});
                //return res.send(productByCategory)
                return res.render("products/category", {
                    products: productByCategory,
                    styles: ["/css/main-category.css"],
                    title: req.params.category
                })
            } catch (error) {
                return res.send(error)
            }
        }
	},
    cart: async (req,res) => {
        try {
            let cart = null
            cart = await Cart.findOne({where: {username: req.session.user.id}})
            cart = cart.length > 0 ? await Cart.findOne({include:["items", "user"], where: {active: true}}) : null
            return res.render('products/productCart',{
            styles: ["/css/main-product.css"],
            cart: cart,
            title: "Tu Carrito de Compras",
            total: cartModel.resume(cart.id) //HACER
            });
        } catch (error) {
            return res.send(error)
        }

    },
    addCart: async (req,res) => {
        try {
            const producto = await Product.findByPk(req.params.id) // asi buscamos producto con el one
            let cart = null
            cart = await Cart.findAll({where: {username: req.session.user.id}})
            cart = cart.length > 0 ? await Cart.findOne({where: {active: true}}) : null
            if(!cart){
                const newCart = Cart.create({
                    user:req.session.user.id,
                    items:[{...producto,quantity: req.body.quantity}]
                })
            }else{
                const updateCart = await Cart.update({cartId: cart.id},{where: {id: producto.id, quantity: req.body.quantity}});
            } // en un punto pasamos información TODAIVA NO SABEMOS DONDE
            return res.redirect("/products/cart");
        } catch (error) {
            return res.send(error);
        }

    },
    removeCart: async (req,res) =>{
        const producto = await Product.findOne(req.body.id) // asi buscamos producto con el one
        let cart = null
        cart = await Cart.findAll({where: {username: req.session.user.id}})
        cart = cart.length > 0 ? await Cart.findOne({where: {active: true}}) : null
        if(cart){
           const remove = await Cart.remove(cart.id,producto.id)
           // return res.send(remove)
        }
        return res.redirect("/products/cart");
    },
    create: async (req,res) => {
        try {
            return res.render('products/createProduct',{
                styles: ["/css/createProduct.css"],
                category: await Category.findAll(),
                size: await Size.findAll(),
                type: await Type.findAll(),
                title: "Crear nuevo producto"
            });    
        } catch (error) {
            return res.send(error)
        }
    },
    save: async (req,res) => {
/*          return res.send({
            data: req.body, 
            oferts: req.body.oferts == "true" ? true : false,
            files: req.files //porq esta ANY, si es SINGLE es file
        })  */
        try {
            let result = await Product.create({
                name: req.body.name,
                description: req.body.descr,
                price: req.body.price,
                oferts: req.body.oferts,
                typeId: req.body.type,
                categoryId: req.body.category,
            }) 

            await result.setSizes(Array.from(req.body.sizes))

            const images = await Promise.all(
                req.files.map(async (file) => {
                    return await Image.create({url:"img/products/"+file.filename})
                })
            )

            await result.setImages(images)

            return res.redirect("/")
        } catch (error) {
            return res.send(error)
        }

    },
    edit: async (req,res) => {
        /*return res.send({
            product: product.oneWithExtra(req.params.id),
            category: category.all(),
            size: size.all(),
            types: type.all(),
            edit:true
        })*/  
        try {

            const show = await Product.findByPk(req.params.id,{
                include:["type","category","sizes","images"]
            })

            return res.render('products/editProduct',{
                styles: ["/css/editProduct.css"],
                product: show,
                category: await Category.findAll(),
                size: await Size.findAll(),
                types: await Type.findAll(),
                edit: true,
                title: "Editar producto"
            });
        } catch (error) {
            return res.send(error)
        }

    },
    update: async (req,res) => {
       /*return res.send({
            data: req.body, 
            oferts: req.body.oferts == "true" ? true : false,
            files: req.files //porq esta ANY, si es SINGLE es file
        }) */  
        try {

            const edited = await Product.findByPk(req.params.id,{
                include:["type","category","sizes","images"]
            })
            
            let result = await Product.update({
                name: req.body.name,
                description: req.body.descr,
                price: req.body.price,
                oferts: req.body.oferts,
                typeId: req.body.type,
                categoryId: req.body.category,
            },{where: {id: edited.id}})
            
            await edited.setSizes(Array.from(req.body.sizes)) // set cambia tablas intermedias

            // Eliminar las imagenes Anteriores de la Carpeta Public/Products

            const images = await edited.getImages(); // get busco en tablas intermedias

            const imagesUrls = images.map(img => path.resolve(__dirname,"../../public",img.url))

            imagesUrls.forEach(url => fs.unlinkSync(url))

            // Eliminar las imagenes Anteriores de la base de datos
            
            const imagesIds = images.map(img => img.id)
            
            await Promise.all( imagesIds.map(async idImage => await Image.destroy({where: {id: idImage}})));
            
            // Agregar las imagenes nuevas a la base de datos
            
            const imagesCreate = await Promise.all( req.files.map(async file => await Image.create({url: "img/products/"+file.filename})));
            
            // Agregar al producto actualizado los ids de las imagenes creadas

            await edited.setImages(imagesCreate)
            
            return res.redirect("/");
            
        } catch (error) {
            return res.send(error)
        }

    },
    delete: async (req,res) => {
        try {
            let result = await Product.destroy({where: {id : req.params.id}});
            return res.redirect("/");
        } catch (error) {
            return res.send(error)
        }
        
    }
}

module.exports = productsController;