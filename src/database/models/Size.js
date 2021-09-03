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

    return Size
}