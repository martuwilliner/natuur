module.exports = (Sequelize,DataTypes) => {
    const ProductImage = Sequelize.define('productImage', { 
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    imageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    });

    return ProductImage
}