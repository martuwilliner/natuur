const path = require("path");
const fs = require("fs");
const category = require ("./category");
const type = require ("./type");
const image = require ("./image");
const size = require ("./size");

module.exports = {
    directory: path.resolve(__dirname, "../data", "products.json"),
    all: function(){
        const file = fs.readFileSync(this.directory);
        return JSON.parse(file);
    },
    allWithExtra: function() {
        return this.all().map(element => {
            element.category = category.one(element.category);
            return element; 
        }).map(element => {
            element.type = type.one(element.type);
            return element; 
        }).map(element => {
            element.images = element.images.map(imageId => image.one(imageId))
            return element; 
        }).map(element => {
            element.sizes = element.size.map(sizeId => size.one(sizeId))
            return element; 
        })
    },//un intermedio para agregarle algo extra. por ejemplo en este caso la categoria
    one: function(id){
        return this.all().find(element => element.id == id);
    },//para buscar por el id q estoy buscando
    oneWithExtra: function(id) {
        return this.allWithExtra().find(element => element.id == id);
    },
/*     cssByCategory: function (category) {
        return this.all().filter(product => product.category == category)
    } */
}