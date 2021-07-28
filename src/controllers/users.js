const usersController = {
    register: (req,res) => {
        return res.render('users/register',{
        styles: ["/css/main-register.css"],
        title: "Natuur | Registrate"
        });
    },
    login: (req,res) => {
        return res.render('users/login',{
        styles: ["/css/main-login.css"],
        title: "Natuur | Iniciar sesión"
        });
    },
}

module.exports = usersController;
