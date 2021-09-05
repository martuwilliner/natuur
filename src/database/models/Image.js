module.exports = (Sequelize,DataTypes) => {
    const Image = Sequelize.define('image', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    });

    Image.associate(models => {
        Product.belongsToMany(models.Product, {as: "products", throught:"productImages", foreignKey: "imageId", otherKey: "productId"})
    })

    return Image
}