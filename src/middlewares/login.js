const {body} = require('express-validator');
const bcrypt = require("bcrypt")
const userModel = require("../models/user");

module.exports = [
    body("usuario").notEmpty().custom(value => {
        const user = userModel.search("usuario",value);
        return user ? true : Promise.reject("El usuario no esta registrado")
    }),
    body("password").notEmpty().isLength({min:8}).custom((value,{req}) => {
        const user = userModel.search("usuario",req.body.usuario);
        return user ? bcrypt.compareSync(value,user.password) ? true : Promise.reject("La contraseña no es correcta") : Promise.reject("El usuario no es correcto")
    })
]