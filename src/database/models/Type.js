module.exports = (Sequelize,DataTypes) => {
    const Type = sequelize.define('type', { 
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    typeName: {
        type: Sequelize.STRING,
        allowNull: false,
    }
    })

    return Type
}