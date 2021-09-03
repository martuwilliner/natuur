module.exports = (Sequelize,DataTypes) => {
    const ProductSize = Sequelize.define('productSize', { 
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
        model:"products",
        id:"id"
        }
    },
    sizeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
        model:"sizes",
        id:"id"
        }
    }
    });

    return ProductSize
}