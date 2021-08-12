const cartModel = require("../models/cart");
module.exports = (req,res,next) =>{

    let cart = null

    if(req.session.user != undefined) {

        cart = cartModel.filter('user',req.session.user.id)
        cart = cart.length > 0 ? cartModel.search('active',true) : null
    }

    res.locals.cart = cart;
    next();
}