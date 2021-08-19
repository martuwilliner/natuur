const path = require("path");
const fs = require("fs");
const productModel = require("./product")

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
        let listItems = select.items;
        let items = listItems.map(item => item.id);
        let check = items.includes(data.id);
       
        allCarts = allCarts.map(cart => { // no es push porque acá modificamos 
            if(cart.id == select.id){
                if(check){
                    cart.items = cart.items.map(item => {
                        if(item.id == data.id){
                            item.quantity = data.quantity
                            return item
                        }
                        return item
                    }) 
                }else{
                    let product = productModel.oneWithExtra(data.id)
                    cart.items.push({...product,quantity:data.quantity})
                }
            }
            return cart
        })
        this.write(allCarts);
        return allCarts; 
        
    },
    remove:function (id,item) {
        let allCarts = this.all()
        let select = this.one(id);
        let listItems = select.items;
        let items = listItems.map(item => item.id);
        let check = items.includes(item);
        
        allCarts = allCarts.map(cart => { 
            if(cart.id == select.id){
                if(check){
                    cart.items = cart.items.filter(product => product.id != item)
                }
            }
            return cart
        })
        this.write(allCarts);
        return select;
    },
    resume: function(id) {
        let select = this.one(id);
        let listItems = select.items;
        let items = listItems.map(item => item.price * item.quantity);
        return items.reduce((acumulator,price) => acumulator + price ,0)
    }

}
