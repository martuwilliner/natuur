const product = require ("../models/product")

const mainController = {
    index: (req,res) =>{
        return res.render('index', 
        {products: 
            product.allWithExtra().filter(product => product.oferts == true), 
        styles: ["/css/main-index.css"],
/*         styles:
            style. */
        }
        );
    },
}

module.exports = mainController;

