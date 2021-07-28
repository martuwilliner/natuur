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
    },
    edit: function (data,files,id) {
        const directory = path.resolve(__dirname, "../data", "products.json")
        let productos = this.all();
        let updated = this.one(id);
        // eliminamos la imagen de la carpeta upload
        if(updated.images != undefined && updated.images.length > 0 && files != undefined && files.length > 0){
            updated.images.forEach(imageId => {
                let imageSelect = image.one(imageId);
                let pathImage = path.resolve(__dirname,"../../public",imageSelect.url)
                let imageExist = fs.existsSync(pathImage) //exists es para saber si existe
                if(imageExist){
                    fs.unlinkSync(pathImage) //unlink borra file
                }
            })
        }
        
        productos.map(producto => {
            if(producto.id == id ){
                producto.name = data.name,
                producto.descr = data.descr,
                producto.category = parseInt(data.category),
                producto.size = Array.from(data.sizes).length > 1 ? data.sizes.map(size => parseInt(size)) : Array.from(data.sizes).map(size => parseInt(size)),
                producto.type = parseInt(data.type),
                producto.price = parseInt(data.price), 
                producto.images = files != undefined && files.length > 0 ? files.map(file => image.new(file).id) : updated.images,
                producto.oferts = data.oferts == "true" ? true : false
            }
            return producto
        })
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;
    },
    delete: function (id)  {
        const directory = path.resolve(__dirname, "../data", "products.json")
        let productos = this.all();
        let deleted = this.one(id);
        // eliminamos la imagen de la carpeta upload
        /* fs.unlinkSync(path.resolve(__dirname,"../../public",deleted.image)) */
        if(deleted.images != undefined && deleted.images.length > 0){
            deleted.images.forEach(imageId => {
                let imageSelect = image.one(imageId);
                let pathImage = path.resolve(__dirname,"../../public",imageSelect.url) // la coma antes de imagenSelect actua de barra
                let imageExist = fs.existsSync(pathImage) //exists es para saber si existe
                console.log("imagen",pathImage);
                console.log("imagen Existe ?",imageExist);
                if(imageExist){
                    fs.unlinkSync(pathImage) //unlink borra file
                    image.delete(imageSelect.id)
                }
            })
        }
        // filtarmos el producto que deaseamos eliminar
        productos = productos.filter(producto => producto.id != deleted.id )
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;
    }

}