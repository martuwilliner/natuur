module.exports = (Sequelize,DataTypes) => {
    const Image = Sequelize.define('image', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    });

    return Image
}