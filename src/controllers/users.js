const {validationResult} = require("express-validator")
const {User,Cart} = require("../database/models");

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
    profile: (req,res) => {
        return res.render('users/userProfile',{
            styles: ["/css/main-profile.css"],
            title: "Profile"
        });        
    },
    save: async (req,res) => {
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
            try {
                const newUser = await User.create({
                    firstName: req.body.nombre,
                    lastName: req.body.apellid,
                    username: req.body.usuario,
                    email: req.body.email,
                    password: req.body.password
                });
                return newUser ? res.redirect("/users/login") : res.redirect("/")
            } catch (error) {
                return res.send(error)
            }
            
        }
    },
    access: async (req,res) => {
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
            try {
                const user = await User.findOne({
                    includes:["carts"],
                    where: {username: req.body.usuario}
                });
                
                const carts = await user.getCarts();
               
                const actives = carts.filter(cart => cart.active == true)

                const isValid = carts.length == 0 && actives.length == 0

                /* return res.send({
                    isValid: condition,
                    carts: carts.length, 
                    actives: actives.length
                }); */

                if( isValid ){
                    await Cart.create({
                        userId: user.id,
                        date: new Date(),
                        active: true
                    })
                }


                req.session.user = user;

                return res.redirect("/");
            } catch (error) {
                return res.send(error)
            }
            
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
