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
        reference: {
        model:"products",
        id:"id"
        }
    },
    imageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
        model:"images",
        id:"id"
        }
    }
    });

    return ProductImage
}