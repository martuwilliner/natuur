const express = require ('express');
const path = require('path');
const app = express ();

const router = express.Router();

const productsControllers = require('../controllers/products');


// router
router.get('/detail/:category/:id', productsControllers.showDetail); // IMPORTANTE PONER ID
router.get('/cart', productsControllers.cart);
router.get('/editProduct/:id', productsControllers.edit);
/* router.put('/products/editProduct', productsControllers.edit); */
router.get('/createProduct', productsControllers.create); 
/* router.post('/products/createProduct', productsControllers.create);  */

router.get('/:category', productsControllers.category);


module.exports = router;