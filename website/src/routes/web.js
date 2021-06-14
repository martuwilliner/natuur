const express = require ('express');
const app = express ();

const path = require('path');

//Website Routes
app.get("/", (req,res) => res.sendFile(path.resolve(__dirname, "../views/index.html")));

module.exports = app;