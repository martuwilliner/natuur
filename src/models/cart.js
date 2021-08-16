const path = require("path");
const fs = require("fs");
const model = require("./product")

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
        let allCarts = this.all()
        let select = this.one(id);
        
        allCarts = allCarts.map(cart => { // no es push porque acá modificamos 
            if(cart.id == select.id){
                cart.items.map((item,index,items) => {
                    if(item.id == data.id){ // data es la info del producto q esta en nuestra web
                        item.quantity = data.quantity;
                    }else{
                        let product = model.oneWithExtra(data.id)
                        items.push({...product, quantity: data.quantity})
                    }
                    return item
                })
            }
            return cart
        })
        
        this.write(allCarts);
        return select; 
        
    },
        delete: function(id,data){
        let allCarts = this.all()
        let select = this.one(id);
        //  return console.log("cart", select.items.length)
        if (select.items.length <= 0) {
            allCarts = allCarts.filter(cart => cart.id != select.id)
            this.write(allCarts);
        }else{
            // return console.log("car", allCarts[0].items.length)
            allCarts = allCarts.map(cart => {
                if (cart.id == select.id) {
                    console.log("data", data)
                    // cart.items = cart.items.filter(item => item.id != data.id)
                    console.log("cart", cart.items.find(item => item.id == data.id))
                }
                return cart;
            })
            
            this.write(allCarts)
        }
    }
}

//productos = productos.filter(producto => producto.id != deleted.id )
//fs.writeFileSync(directory,yJSON.stringif(productos,null,2));
//return true;