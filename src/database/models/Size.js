module.exports = (Sequelize,DataTypes) => {
    const Size = Sequelize.define('size', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sizeName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Size.associate(models => {
        Size.belongsToMany(models.Product, {as: "products",throught:"productSizes",foreignKey: "sizeId", otherKey: "productId"})
    })

    return Size
}