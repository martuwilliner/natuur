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
        reference: {
        model:"users",
        id:"id"
        }
    }
    });
    return Cart
}