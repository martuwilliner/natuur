const express = require ('express');
const app = express ();

const path = require('path');

app.set("port",process.env.PORT || 3100)

app.listen(app.get("port"),() => console.log("Server Start http://localhost:"+app.get("port")))

// Server
/* app.listen(3100, () => console.log("Servidor iniciado en la terminal 3100")); */

// Public Access 
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

// Web Access
app.use (require("./routes/web"));