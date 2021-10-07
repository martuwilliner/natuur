const path = require("path");
const fs = require("fs");
module.exports = {
    directory: path.resolve(__dirname, "../data", "users.json"),
    all: function(){
        const file = fs.readFileSync(this.directory);
        return JSON.parse(file);
    },
    one: function(id){
        return this.all().find(element => element.id == id);
    },//para buscar por el id q estoy buscando
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
        const allUsers = this.all();
        const quantity = allUsers.length;
        const last = quantity - 1
        return quantity > 0 ? allUsers[last].id + 1 : 1 
    },
    create: function(data){
        let users = this.all();
        let newUser = {
            id : this.id(),
            roll:1,
            ...data // destructuramiento 1 a 1
        };
        users.push(newUser);
        this.write(users);
        return newUser;        
    },
}