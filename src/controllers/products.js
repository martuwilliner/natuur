const product = require ("../models/product")

const productsController = {
    showDetail: (req,res) => {
        return res.render('products/productDetail', 
        {products: //ES EL NOMBRE CON EL Q SE LLAMA A LA FUNCION
            product.oneWithExtra(req.params.id),
        styles: ["/css/mainAlmacenProductDetail.css", "/css/mainGourmetProductDetail.css", "/css/mainCosmeticaProductDetail.css"],
        }
        );
    },

/*     create: (req,res) => {
        return res.render('products/createProduct');
    },

    edit: (req,res) => {
        return res.render('products/editProduct');
    },
 */
    productCart: (req,res) => {
        return res.render('products/productCart');
    },
}

module.exports = productsController;