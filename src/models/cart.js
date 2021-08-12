const path = require("path");
const fs = require("fs");

module.exports = {
    directory: path.resolve(__dirname, "../data", "carts.json"),
    all: function(){
        const file = fs.readFileSync(this.directory);
        return JSON.parse(file);
    },//para leer todo el archivo categories.json como ob literal
    one: function(id){
        return this.all().find(element => element.id == id);
    },
    search: function(prop,value){
        return this.all().find(user => user[prop] == value)
    },
    filter: function(prop,value){
        return this.all().filter(user => user[prop] == value)
    },
    write: function(data) {
        return fs.writeFileSync(this.directory,JSON.stringify(data, null, 2))
    },
    id: function(){
        const allCarts = this.all();
        const quantity = allCarts.length;
        const last = quantity - 1
        return quantity > 0 ? allCarts[last].id + 1 : 1 
    },
    create: function(data){
        let cart = this.all();
        let newCart = {
            id : this.id(),
            ...data, // destructuramiento
            date: Date.now(),
            active: true
        };
        cart.push(newCart);
        this.write(cart);
        return newCart;        
    },
    update: function(id,data){
        
    }
}