const path = require("path");
const fs = require("fs");

module.exports = {
    directory: path.resolve(__dirname, "../data", "size.json"),
    all: function(){
        const file = fs.readFileSync(this.directory);
        return JSON.parse(file);
    },//para leer todo el archivo categories.json como ob literal
    one: function(id){
        return this.all().find(element => element.id == id);
    }//para buscar por el id q estoy buscando
}