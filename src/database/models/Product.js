module.exports = (Sequelize,DataTypes) => {
    const Product = Sequelize.define('product', { 
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
        reference: {
        model:"types",
        id:"id"
        }
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
        model:"categories",
        id:"id"
        }
    }
    });

    return Product
}