module.exports = (sequelize,DataTypes) => {
    const Cart = sequelize.define('Cart', { 
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
    },{
        timestamps: false  // poner fecha sobre cada modificacion q se hace.. 
    });

    Cart.associate = ({User,Item}) => { //models siempre representa a los modelos de db
        Cart.belongsTo(User,{
            as: "user", 
            foreignKey: "userId"
        }) // as es como llamamos al modelo que buscamos y foreing key es el nombre de la columna que vamos a relacionar
        Cart.hasMany(Item, {
            as: "items", 
            foreignKey: "cartId"
        })
    }

    return Cart
}