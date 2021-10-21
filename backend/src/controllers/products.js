const {validationResult} = require("express-validator")
const {Product,Category,Size,Type,Cart,Image,Item} = require ("../database/models");
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
            
            let cart = await Cart.findOne({
                include:["items", "user"],
                where: {
                    active: true,
                    userId: req.session.user.id
                }
            })

            let items = await cart.getItems();

            items = await Promise.all(
                items.map(async item => {
                    return {
                        ...item,
                        productPrice:parseInt(item.productPrice),
                        productQuantity: parseInt(item.productQuantity),
                        product: await Product.findByPk(item.productId,{
                            include:["type","category","sizes","images"]
                        })
                    }
                })
            )

            let itemsPrecies = items.map(item => item.productPrice * item.productQuantity );

            let total = itemsPrecies.reduce((acumulator,price) => acumulator + price ,0)
            
            

            return res.render('products/productCart',{
                styles: ["/css/main-product.css"],
                cart: cart,
                items: items,
                title: "Tu Carrito de Compras",
                total: total
            });
        } catch (error) {
            return res.send(error)
        }

    },
    addCart: async (req,res) => {
        try {
            let producto = await Product.findByPk(req.params.id) // asi buscamos producto con el one
            let cart = await Cart.findOne({
                include:["items", "user"],
                where: {
                    active: true,
                    userId: req.session.user.id
                }
            })

            let items = await cart.getItems();

            let productsIds = items.map(item => item.productId)

            let productExist = productsIds.includes(producto.id);

            if(productExist == true){
                await Item.update({
                    productQuantity: req.body.quantity,
                    productPrice: producto.price,        
                },{where:{
                    cartId: cart.id,
                    productId: producto.id
                }})
                
            }else{
                await Item.create({
                    productId: producto.id ,
                    productPrice: producto.price ,
                    productQuantity: req.body.quantity ,
                    cartId: cart.id
                })
            }

            return res.redirect("/products/cart");

        } catch (error) {
            return res.send(error);
        }

    },
    removeCart: async (req,res) =>{
        let producto = await Product.findByPk(req.body.id) // asi buscamos producto con el one
        let cart = await Cart.findOne({
            include:["items", "user"],
            where: {
                active: true,
                userId: req.session.user.id
            }
        })

        let result = await Item.destroy({
            where: {
                productId:producto.id,
                cartId:cart.id
            }
        });
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
        const errors = validationResult(req);
        const errores = !errors.isEmpty() ? errors.mapped() : null;
        if(errores){
            return res.render('products/createProduct',{
                styles: ["/css/createProduct.css"],
                category: await Category.findAll(),
                size: await Size.findAll(),
                type: await Type.findAll(),
                title: "Crear nuevo producto",
                old: req.body,
                errores: errores
                }); 
        }else{
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
        const errors = validationResult(req);
        const errores = !errors.isEmpty() ? errors.mapped() : null;
        if(errores){
            return res.render('products/editProduct',{
                styles: ["/css/editProduct.css"],
                product: await Product.findByPk(req.params.id,{
                    include:["type","category","sizes","images"] }),
                category: await Category.findAll(),
                size: await Size.findAll(),
                types: await Type.findAll(),
                edit: true,
                title: "Editar producto",
                old: req.body,
                errores: errores
                }); 
        }else{
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