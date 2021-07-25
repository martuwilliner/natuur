const express = require ('express');
const path = require('path');
const multer = require("multer");
const storage = require("../middlewares/multer");

const app = express ();

const router = express.Router();

const productsControllers = require('../controllers/products');

const upload = multer({storage: storage("products")}) // el products es el nombre de la folder

// router
router.get('/detail/:category/:id', productsControllers.showDetail); // IMPORTANTE PONER ID
router.get('/cart', productsControllers.cart);
router.get('/edit/:id', productsControllers.edit);
/* router.put('/products/editProduct', productsControllers.edit); */
router.get('/create', productsControllers.create); 
router.post('/create', [upload.any()], productsControllers.save); 

router.get('/:category', productsControllers.category);

router.post('/cart/:id', productsControllers.cart);

module.exports = router;