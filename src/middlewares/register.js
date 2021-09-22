const {body} = require('express-validator');
const {User} = require("../database/models");

module.exports = [
    body("nombre").notEmpty().inLength({min:2}),
    body("apellido").notEmpty().inLength({min:2}),
    body("usuario").notEmpty().custom(async (value) => {
        // Verficamos que el mail no este registrado antes
        const user = await User.findOne({where: {username: value}}); 
        return user ? Promise.reject("Este usuario ya esta en uso") : true
    }),
    body("email").notEmpty().isEmail().custom(async (value) => {
        // Verficamos que el mail no este registrado antes
        const user = await User.findOne({where: {email: value}}); 
        return user ? Promise.reject("Ya estas registrado") : true
    }),
    body("password").notEmpty().isLength({min:8}),
    body("confirmPassword").notEmpty().isLength({min:8}).custom((value,{req})=>{
        return value === req.body.password ? true : Promise.reject("Las contraseñas no coinciden")
    }),
]
