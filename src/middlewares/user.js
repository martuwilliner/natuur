const {User} = require("../database/models")

module.exports = async (req,res,next) => {

  try {
    let user = null;
    if(req.cookies && req.cookies.usuario){
      user = await User.findOne({where: {userName: req.cookies.usuario}});
      if(user){
        req.session.user = user
      }
    }
    if(req.session && req.session.user){
      user = req.session.user
    }
    res.locals.user = user;   
  } catch (error) {
    res.send(error)
  }
  
  next();
}