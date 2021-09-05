module.exports = (Sequelize,DataTypes) => {
    const Item = Sequelize.define('Item', { 
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
    },{
        timestamps: false  // poner fecha sobre cada modificacion q se hace.. 
    });

    Item.associate= ({Product,Cart}) => {
        Item.belongsTo(Product, {
            as: "product", 
            foreignKey: "productId"
        }),
        Item.belongsTo(Cart, {
            as: "cart", 
            foreignKey: "cartId"
        })
    }

    return Item
}