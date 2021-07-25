const multer = require('multer');
const path = require('path');

module.exports = function (folder) {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => cb(null,path.resolve(__dirname,'../../public/img',folder)),
        filename: (req, file, cb) => cb(null,file.fieldname + Date.now() + path.extname(file.originalname))
    }) 
    return storage
}
