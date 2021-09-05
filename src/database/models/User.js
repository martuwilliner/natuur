module.exports = (Sequelize,DataTypes) => {
    const User = Sequelize.define('user', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roll: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
    });

    User.associate(models => {
        User.hasMany(models.Cart, {as: "carts", foreignKey: "userId"}) // el alias en plural porque es MANY en foreignKey el nombre que se lleva a la otra tabla
    })

    return User
}