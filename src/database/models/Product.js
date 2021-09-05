module.exports = (Sequelize,DataTypes) => {
    const Product = Sequelize.define('product', { 
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(2),
        allowNull: false,
    },
    oferts: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    });

    Product.associate(models => {
        Product.belongsTo(models.Type, {as: "type", foreignKey: "typeId"}),
        Product.belongsTo(models.Category, {as: "category", foreignKey: "categoryId"}),
        Product.hasMany(models.Item, {as: "items", foreignKey: "productId"})
        Product.belongsToMany(models.Size, {as: "sizes",throught:"productSizes",foreignKey: "productId", otherKey: "sizeId"}) //belongsToMany es para tablas intermedias
        Product.belongsToMany(models.Image, {as: "images", throught:"productImages", foreignKey: "productId", otherKey: "imageId"}) // la tabla intermedia se mantiene en los dos modelos
    })

    return Product
}