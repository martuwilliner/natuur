const productsController = {
    showAlmacenDetail: (req,res) => {
        return res.render('products/almacenProductDetail');
    },
    showGourmetDetail: (req,res) => {
        return res.render('products/gourmetProductDetail');
    },
    showCosmeticaDetail: (req,res) => {
        return res.render('products/cosmeticaProductDetail');
    },
    productCart: (req,res) => {
        return res.render('products/productCart');
    },
}

module.exports = productsController;