const product = require ("../models/product")

const productsController = {
    showDetail: (req,res) => {
        return res.render('products/productDetail', 
        {product: //ES EL NOMBRE CON EL Q SE LLAMA A LA FUNCION
            product.oneWithExtra(req.params.id),
        styles: ["/css/mainAlmacenProductDetail.css", "/css/mainGourmetProductDetail.css", "/css/mainCosmeticaProductDetail.css"],
        }
        );
    },
    cart: (req,res) => {
        return res.render('products/productCart',{
        styles: ["/css/main-product.css"],
        });
    },
    create: (req,res) => {
        return res.render('products/createProduct',{
            styles: ["/css/main-create.css"],
        });    
    },
    edit: (req,res) => {
        return res.render('products/editProduct',{
            styles: ["/css/main-edit.css"],
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