module.exports = (Sequelize,DataTypes) => {
    const Item = Sequelize.define('item', { 
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    productQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    });

    Item.associate(models => {
        Item.belongsTo(models.Product, {as: "product", foreignKey: "productId"}),
        Item.belongsTo(models.Cart, {as: "cart", foreignKey: "cartId"})
    })

    return Item
}