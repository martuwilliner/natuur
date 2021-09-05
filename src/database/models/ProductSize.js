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
    },
    sizeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    });

    return ProductSize
}