module.exports = (Sequelize,DataTypes) => {
    const Type = Sequelize.define('Type', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    typeName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    },{
        timestamps: false  // poner fecha sobre cada modificacion q se hace.. 
    });

    Type.associate = ({Product}) => {
        Type.hasMany(Product, {
            as: "products", 
            foreignKey: "typeId"
        })
    }
    
    return Type
}