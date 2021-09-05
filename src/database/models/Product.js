module.exports = (Sequelize,DataTypes) => {
    const Product = Sequelize.define('Product', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(2),
        allowNull: false,
    },
    oferts: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    },{
        timestamps: false  // poner fecha sobre cada modificacion q se hace.. 
    });

    Product.associate = ({Type,Category,Item,Size,Image}) => {
        Product.belongsTo(Type, 
            {as: "type", 
            foreignKey: "typeId"
        }),
        Product.belongsTo(Category, {
            as: "category", 
            foreignKey: "categoryId"
        }),
        Product.hasMany(Item, {
            as: "items", 
            foreignKey: "productId"
        })
        Product.belongsToMany(Size, {
            as: "sizes",
            through:"productSizes",
            foreignKey: "productId", 
            otherKey: "sizeId"
        }) //belongsToMany es para tablas intermedias
        Product.belongsToMany(Image, {
            as: "images", 
            through:"productImages", 
            foreignKey: "productId", 
            otherKey: "imageId"
        }) // la tabla intermedia se mantiene en los dos modelos
    }

    return Product
}