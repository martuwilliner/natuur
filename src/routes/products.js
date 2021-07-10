const express = require ('express');
const path = require('path');
const app = express ();

const router = express.Router();

const productsControllers = require('../controllers/products');


// router
router.get('/products/almacenProductDetail', productsControllers.showAlmacenDetail);
router.get('/products/gourmetProductDetail', productsControllers.showGourmetDetail); 
router.get('/products/cosmeticaProductDetail', productsControllers.showCosmeticaDetail); 


module.exports = router;