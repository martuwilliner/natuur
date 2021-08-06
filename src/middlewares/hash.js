const bcrypt = require("bcrypt")
module.exports = (req,res,next) => {

    if(req.body != undefined && req.body.password){
        req.body.password = bcrypt.hashSync(req.body.password,10)
    }
    
    next()
}