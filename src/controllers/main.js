const product = require ("../models/product")

const mainController = {
    index: (req,res) => {
        return res.render('index', 
        {products: 
            product.allWithExtra().filter(product => product.oferts == true).slice(-4), 
        styles: ["/css/main-index.css"],
        title: "Natuur | Bienvenidos",
        expanded: true,
        }
        );
    }
}

module.exports = mainController;

