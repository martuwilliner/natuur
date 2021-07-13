const express = require ('express');
const path = require('path');
const app = express ();

const router = express.Router();

const productsControllers = require('../controllers/products');


// router
router.get('/productDetail/:id', productsControllers.showDetail); // IMPORTANTE PONER ID
router.get('/productCart', productsControllers.cart);
router.get('/editProduct', productsControllers.edit);
/* router.put('/products/editProduct', productsControllers.edit); */
router.get('/createProduct', productsControllers.create); 
/* router.post('/products/createProduct', productsControllers.create);  */


module.exports = router;