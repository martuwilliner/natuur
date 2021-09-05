module.exports = (Sequelize,DataTypes) => {
    const Category = Sequelize.define('category', { 
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoryStyle: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    });

    Category.associate(models => {
        Category.hasMany(models.Product, {as: "products", foreignKey: "categoryId"})
    })

    return Category
}