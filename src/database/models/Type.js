module.exports = (Sequelize,DataTypes) => {
    const Type = Sequelize.define('type', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    typeName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    })

    Type.associate(models => {
        Type.hasMany(models.Product, {as: "products", foreignKey: "typeId"})
    })
    
    return Type
}