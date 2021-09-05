const {User} = require("../database/models");

module.exports = async (req,res,next) => {
    try {
        const user = await User.findOne({where: {username: req.body.email}}) // CHEQUEAR QUE ESTE EL USUARIO REGISTRADO
        if(req.body != undefined && req.body.rememberMe && user){
            res.cookie("usuario",req.body.usuario,{maxAge:1000 * 60 * 60 * 24 * 30})
        }
    } catch (error) {
        res.send(error)
    }
    
    next()
}