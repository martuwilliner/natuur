const express = require ('express');
const path = require('path');
const methodOverride = require('method-override');
const cookie = require('cookie-parser');
const session = require('express-session');
const user = require('./middlewares/user');
const cart = require('./middlewares/cart');
const app = express ();

// App Server
app.set("port",process.env.PORT || 3100)
app.listen(app.get("port"),() => console.log("Server Start http://localhost:"+app.get("port")));

// EJS
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, "./views")); 

// Public Access 
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

// Middlewares
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(session({secret: "natuur", resave:false, saveUninitialized: true}));
app.use(cookie());
app.use(user);
app.use(cart);

// Web Routes
app.use (require("./routes/main"));
app.use ("/products",require("./routes/products"));
app.use ("/users",require("./routes/users"));
app.use ("/api/users",require("./routes/apiUser"));
app.use ("/api/products",require("./routes/apiProducts"));

app.get("*", (req, res) => {
    res.render(path.resolve(__dirname, "./views/error.ejs"), {styles: ["/css/error.css"], title: "Natuur | 404Error"})
})