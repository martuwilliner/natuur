const usersController = {
    register: (req,res) => {
        return res.render('users/register',{
        styles: ["/css/main-register.css"],
        });
    },
    login: (req,res) => {
        return res.render('users/login',{
        styles: ["/css/main-login.css"],
        });
    },
}

module.exports = usersController;
