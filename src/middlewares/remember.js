const userModel = require("../models/user");
module.exports = (req,res,next) => {
    const user = userModel.search("usuario",req.body.email) // CHEQUEAR QUE ESTE EL USUARIO REGISTRADO
    if(req.body != undefined && req.body.rememberMe && user){
        res.cookie("usuario",req.body.usuario,{maxAge:1000 * 60 * 60 * 24 * 30})
    }
    
    next()
}