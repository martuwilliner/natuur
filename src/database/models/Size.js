module.exports = (Sequelize,DataTypes) => {
    const Size = Sequelize.define('Size', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sizeName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        timestamps: false  // poner fecha sobre cada modificacion q se hace.. 
    });

    Size.associate= ({Product}) => {
        Size.belongsToMany(Product, {
            as: "products",
            through:"productSizes",
            foreignKey: "sizeId", 
            otherKey: "productId"
        })
    }

    return Size
}