const path = require("path");
const fs = require("fs");

module.exports = {
    directory: path.resolve(__dirname, "../data", "images.json"),
    all: function(){
        const file = fs.readFileSync(this.directory);
        return JSON.parse(file);
    },//para leer todo el archivo categories.json como ob literal
    one: function(id){
        return this.all().find(element => element.id == id);
    },//para buscar por el id q estoy buscando
    new: function (data) {
        let imagenes = this.all();
        let nuevo = {
            id: imagenes.length > 0 ? imagenes[imagenes.length -1].id + 1: 1,
            url: "/img/products/" + data.filename, //filename es lo q viene del MULTER
        }
        imagenes.push(nuevo)
        fs.writeFileSync(this.directory,JSON.stringify(imagenes,null,2));
        return nuevo;  
    }
}

//VER PARA QUE DEVUELVA EN CASO DE SER NECESARIO MAS DE UNA IMAGEN (ARRAY)