const {Product} = require("../database/models");
const {Category} = require("../database/models");

const apiProductsController = {
    index: async (req,res) => {
        try {
            const product = await Product.findAll({include:["type","category","sizes","images"]})
            const category = await Category.findAll({include:["products"]})
            return res.status(200).json({
                count: product.length,
                countByCategory: [...category].map(cat => Object({
                    id: cat.id,
                    name: cat.categoryName,
                    products: cat.products.length
                })),
                products: [...product].map(({id,name,description,category,images}) => Object({
                    product_id:id,
                    name:name,
                    description:description,
                    category: category,
                    images: [...images].map(image => `http://localhost:3100/${image.url}`)[0],
                    url: `http://localhost:3100/api/products/${id}`
                })),
                status: 200
            })
        } catch (error) {
            res.send(error)
        }
    },
    show: async (req,res) => {
        try {
            const product = await Product.findByPk(req.params.id,{include:["type","category","sizes","images"]})
            const {id,name,description,type,category,sizes,images} = product
            return res.status(200).json({
                product_id:id,
                name:name,
                type: type,
                category: category,
                sizes: sizes,
                images: [...images].map(image => `http://localhost:3100/${image.url}`),
                description:description
            })
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = apiProductsController;