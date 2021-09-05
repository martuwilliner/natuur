module.exports = (Sequelize,DataTypes) => {
    const Cart = Sequelize.define('cart', { 
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    });

    Cart.associate(models => { //models siempre representa a los modelos de db
        Cart.belongsTo(models.User,{as: "user", foreignKey: "userId"}) // as es como llamamos al modelo que buscamos y foreing key es el nombre de la columna que vamos a relacionar
        Cart.hasMany(models.Item, {as: "items", foreignKey: "cartId"})
    })

    return Cart
}