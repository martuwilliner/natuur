const {body} = require('express-validator');
const userModel = require("../models/user");

module.exports = [
    body("nombre").notEmpty(),
    body("apellido").notEmpty(),
    body("usuario").notEmpty().custom(value => {
        // Verficamos que el mail no este registrado antes
        const user = userModel.search("usuario",value); 
        return user ? Promise.reject("Este usuario ya esta en uso") : true
    }),
    body("email").notEmpty().isEmail().custom(value => {
        // Verficamos que el mail no este registrado antes
        const user = userModel.search("email",value); 
        return user ? Promise.reject("Ya estas registrado") : true
    }),
    body("password").notEmpty().isLength({min:8}),
    body("confirmPassword").notEmpty().isLength({min:8}).custom((value,{req})=>{
        return value === req.body.password ? true : Promise.reject("Las contraseñas no coinciden")
    }),
]