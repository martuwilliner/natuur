const usersController = {
    register: (req,res) => {
        return res.render('users/register');
    },
    login: (req,res) => {
        return res.render('users/login');
    },
}

module.exports = usersController;