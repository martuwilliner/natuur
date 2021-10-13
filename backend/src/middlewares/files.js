const path = require("path");
const fs = require("fs");

module.exports = (req, res, next) => {
    if (req.file != undefined) {
        let extension = path.extname(req.file.originalname);
        let permitidos = ["jpg","jpeg", "png", "gif"];
        if(!permitidos.includes(extension)){ 
            fs.unlinkSync(path.resolve(__dirname,"../../public/img/products",req.file.filename)) // BORRAMOS IMAGEN Q NO QUEREMOS
            req.file.filename = "default-image.jpg";
        }
    }
    next()
}