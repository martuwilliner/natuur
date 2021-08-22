const {validationResult} = require("express-validator")
const userModel = require("../models/user");
const usersController = {
    register: (req,res) => {
        return res.render('users/register',{
        styles: ["/css/main-register.css"],
        title: "Natuur | Registrate",
        });
    },
    login: (req,res) => {
        return res.render('users/login',{
        styles: ["/css/main-login.css"],
        title: "Natuur | Iniciar sesión",
        });
    },
    save: (req,res) => {
        const errors = validationResult(req);
        const errores = !errors.isEmpty() ? errors.mapped() : null;
        //return res.send({data:req.body,errors:errores}) // vemos los datos que se envian del formulario
        if(errores){
            return res.render('users/register',{
                styles: ["/css/main-register.css"],
                title: "Natuur | Registrate",
                old: req.body,
                errores: errores
                }); 
        }else{
            const newUser = userModel.create(req.body);
            return newUser ? res.redirect("/users/login") : res.redirect("/")
        }
    },
    access: (req,res) => {
        const errors = validationResult(req);
        const errores = !errors.isEmpty() ? errors.mapped() : null;
        //return res.send({data:req.body,errors:errores}) // vemos los datos que se envian del formulario
        if(errores){
            return res.render('users/login',{
                styles: ["/css/main-login.css"],
                title: "Natuur | Iniciar sesión",
                old: req.body,
                errores: errores
            });
        }else{
            const user = userModel.search("usuario",req.body.usuario);
            req.session.user = user;
            return res.redirect("/")
            
        }
    },
    logout: (req,res) => {
        if(req.cookies.usuario != undefined && req.session.user != undefined ){
            res.cookie("usuario",req.cookies.usuario,{maxAge:0})
        }
        if(req.session.user){
            delete req.session.user;
        }
        return res.redirect("/")
    }
}

module.exports = usersController;
