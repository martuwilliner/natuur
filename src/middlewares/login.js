const {body} = require('express-validator');
const bcrypt = require("bcrypt")
const {User} = require("../database/models");

module.exports = [
    body("usuario").notEmpty().custom(async (value) => {
        const user = await User.findOne({where: {username: value }});
        return user ? true : Promise.reject("El usuario no esta registrado")
    }),
    body("password").notEmpty().isLength({min:8}).custom(async (value,{req}) => {
        const user = await User.findOne({where: {username: req.body.usuario}});
        return user ? bcrypt.compareSync(value,user.password) ? true : Promise.reject("La contraseña no es correcta") : Promise.reject("El usuario no es correcto")
    })
]