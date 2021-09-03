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
        reference: {
        model:"products",
        id:"id"
        }
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
        model:"carts",
        id:"id"
        }
    }
    });
    return Item
}