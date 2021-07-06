/* aca va index, nosotros , contacto, bla bla */

const controller = {
    index: (req,res) =>{
        return res.render('index');
    },
    register: (req,res) => {
        return res.render('users/register');
    },
    login: (req,res) => {
        return res.render('users/login');
    },
   /*  contacto: falta 
        nosotros*/
}

module.exports = controller;