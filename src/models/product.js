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
    allByCategory: function(category) {
        return this.allWithExtra().filter(product => product.category.name == category); //devuelve un array por eso hay q usar foreach en vista
    },
    one: function(id){
        return this.all().find(element => element.id == id);
    },//para buscar por el id q estoy buscando
    oneWithExtra: function(id) {
        return this.allWithExtra().find(element => element.id == id);
    },
    new: function(data,files){
        const directory = path.resolve(__dirname, "../data", "products.json")
        let productos = this.all();
        let nuevo = {
            id: productos.length > 0 ? productos[productos.length -1].id + 1: 1,
            name: data.name, // data es la info q viene
            descr: data.descr,
            category: parseInt(data.category),
            size: Array.from(data.sizes).length > 1 ? data.sizes.map(size => parseInt(size)) : Array.from(data.sizes).map(size => parseInt(size)),
            // Array.from() es para generar un nuevo array de acuerdo a los parametros()
            type: parseInt(data.type),
            price: parseInt(data.price), //parseInt para q se suba como numero
            images: files.map(file => image.new(file).id),
            oferts: data.oferts == "true" ? true : false,
        }    
        productos.push(nuevo)
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;  
    }
}