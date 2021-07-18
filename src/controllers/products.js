const product = require ("../models/product")
const category = require ("../models/category")
const size = require ("../models/size")
const type = require ("../models/type")

const productsController = {
    showDetail: (req,res) => {
        return res.render('products/productDetail', 
        {product: //ES EL NOMBRE CON EL Q SE LLAMA A LA FUNCION
            product.oneWithExtra(req.params.id),
        styles: ["/css/mainAlmacenProductDetail.css", "/css/mainGourmetProductDetail.css", "/css/mainCosmeticaProductDetail.css"],
        products: product.allByCategory(req.params.category),
    }
        );
    },
    category:(req, res) =>{
		res.render("products/category", {
			products: product.allByCategory(req.params.category),
            styles: ["/css/main-category.css"],
		})
	},
    cart: (req,res) => {
        return res.render('products/productCart',{
        styles: ["/css/main-product.css"],
        products: product.oneWithExtra(req.params.id)
        });
    },
    create: (req,res) => {
        return res.render('products/createProduct',{
            styles: ["/css/createProduct.css"],
            category: category.all(),
            size: size.all(),
            type: type.all()
        });    
    },
    edit: (req,res) => {
        return res.render('products/editProduct',{
            styles: ["/css/editProduct.css"],
            product: product.oneWithExtra(req.params.id),
            category: category.all(),
            size: size.all(),
            type: type.all(),
            edit:true
        });    
    },

/*     create: (req,res) => {
        return res.render('products/createProduct');
    },

    edit: (req,res) => {
        return res.render('products/editProduct');
    },
 */
/*     productCart: (req,res) => {
        return res.render('products/productCart');
    }, */
}

module.exports = productsController;