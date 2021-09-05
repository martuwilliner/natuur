const {Cart} = require("../database/models");

module.exports = async (req,res,next) =>{
    try {
        let cart = null

        if(req.session.user != undefined) {
            cart = await Cart.findAll({where: {userId: req.session.user.id}})
            cart = cart.length > 0 ? await Cart.findOne({where: {active: true}}) : null
        }
    
        res.locals.cart = cart;

    } catch (error) {
        res.send(error)
    }

    next();
}
