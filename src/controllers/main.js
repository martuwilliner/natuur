const {Product} = require ("../database/models")

const mainController = {
    index: async (req,res) => {
        try {
            const list =   await Product.findAll({include:["type","category","sizes","images"],where:{oferts:true},limit: 4}); 
            
            return res.render('index', 
            {products: list,
            styles: ["/css/main-index.css"],
            title: "Natuur | Bienvenidos",
            expanded: true,
            }
            );
            
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = mainController;

