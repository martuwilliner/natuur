const express = require ('express');
const path = require('path');
const app = express ();

const router = express.Router();

const productsControllers = require('../controllers/products');


// router
router.get('/products/productDetail/:id', productsControllers.showDetail); // IMPORTANTE PONER ID
/* router.get('/products/editProduct', productsControllers.edit);
router.get('/products/createProduct', productsControllers.create); */

router.get('/productCart', productsControllers.productCart);



module.exports = router;