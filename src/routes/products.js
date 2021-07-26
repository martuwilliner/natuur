const express = require ('express');
const path = require('path');
const multer = require("multer");
const storage = require("../middlewares/multer");

const app = express ();

const router = express.Router();

const productsControllers = require('../controllers/products');

const upload = multer({storage: storage("products")}) // el products es el nombre de la folder

// router
router.get('/create', productsControllers.create); 
router.get('/cart', productsControllers.cart);
router.get('/:category', productsControllers.category);
router.get('/edit/:id', productsControllers.edit);
router.get('/detail/:category/:id', productsControllers.showDetail); // IMPORTANTE PONER ID

router.post('/create', [upload.any()], productsControllers.save); 
router.post('/cart/:id', productsControllers.addCart);

router.put('/update/:id', [upload.any()], productsControllers.update);
router.delete('/delete/:id', productsControllers.delete);

module.exports = router;