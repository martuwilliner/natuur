const {Product} = require("../database/models");

const apiProductsController = {
    index: async (req,res) => {
        try {
            const products = await Product.findAll()
            return res.status(200).json({
                total: products.length,
                products: products,
                status: 200
            })
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = apiProductsController;