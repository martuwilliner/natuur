const userModel = require("../models/user");

module.exports = (req,res,next) => {
  let user = null;
  if(req.cookies && req.cookies.usuario){
    user = userModel.search("usuario", req.cookies.usuario);
  }
  if(req.session && req.session.user){
    user = req.session.user
  }
  res.locals.user = user; 

  next();
}