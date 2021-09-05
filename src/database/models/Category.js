module.exports = (Sequelize,DataTypes) => {
    const Category = Sequelize.define('Category', { 
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
    },{
        timestamps: false  // poner fecha sobre cada modificacion q se hace.. 
    });

    Category.associate= ({Product}) => {
        Category.hasMany(Product, {
            as: "products", 
            foreignKey: "categoryId"
        })
    }

    return Category
}