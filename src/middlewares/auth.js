module.exports = (roll) => (req,res,next) => {
    if(req.session.user != undefined){
        if(req.session.user.roll == roll){
            next()
        }
        else{
            res.redirect("/")
        }
    }else{
        res.redirect("/")
    }
}