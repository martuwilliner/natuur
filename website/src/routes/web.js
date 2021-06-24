const express = require ('express');
const app = express ();

const path = require('path');

//Website Routes
app.get("/", (req,res) => res.sendFile(path.resolve(__dirname, "../views/index.html")));
app.get("/almacenProductDetail", (req,res) => res.sendFile(path.resolve(__dirname, "../views/almacenProductDetail.html")));
app.get("/gourmetProductDetail", (req,res) => res.sendFile(path.resolve(__dirname, "../views/gourmetProductDetail.html")));
app.get("/cosmeticaProductDetail", (req,res) => res.sendFile(path.resolve(__dirname, "../views/cosmeticaProductDetail.html")));
app.get("/productCart", (req,res) => res.sendFile(path.resolve(__dirname, "../views/productCart.html")));
app.get("/register", (req,res) => res.sendFile(path.resolve(__dirname, "../views/register.html")));
app.get("/login", (req,res) => res.sendFile(path.resolve(__dirname, "../views/login.html")));

module.exports = app;