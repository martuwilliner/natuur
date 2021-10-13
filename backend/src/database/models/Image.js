module.exports = (Sequelize,DataTypes) => {
    const Image = Sequelize.define('Image', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    },{
        timestamps: false  // poner fecha sobre cada modificacion q se hace.. 
    });

    Image.associate = ({Product}) => {
        Image.belongsToMany(Product, {
            as: "products", 
            through:"productImages", 
            foreignKey: "imageId",
            otherKey: "productId",
            timestamps: false
        })
    }

    return Image
}