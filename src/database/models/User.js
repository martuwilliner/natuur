module.exports = (sequelize,dataTypes) => {
    const User = sequelize.define('User', { 
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roll: {
        type: dataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    firstName: {
        type: dataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: dataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: dataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: dataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: dataTypes.TEXT,
        allowNull: false,
    }
    },{
        timestamps: false  // poner fecha sobre cada modificacion q se hace.. 
    });

    User.associate = ({Cart}) => {
        User.hasMany(Cart, {
            as: "carts", 
            foreignKey: "userId"
        }) // el alias en plural porque es MANY en foreignKey el nombre que se lleva a la otra tabla
    }

    return User
}