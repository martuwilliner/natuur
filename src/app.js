const express = require ('express');
const path = require('path');

const app = express ();


// App Server
app.set("port",process.env.PORT || 3100)
app.listen(app.get("port"),() => console.log("Server Start http://localhost:"+app.get("port")));

// EJS
app.set('view engine', 'ejs');
/* app.set('views', path.resolve(__dirname, "./views")); */


// Public Access 
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

/* ACA VA UN APP SETTINGS 



*/


/* ACA VA APP MIDDLEWARES 


*/

// Web Routes
app.use (require("./routes/main"));





