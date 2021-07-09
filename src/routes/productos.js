const express = require ('express');
const path = require('path');
const app = express ();

const router = express.Router();

const productsControllers = require('../controllers/products');


// router
/* router.get('/', productsControllers.index);
router.get('/login', productsControllers.login);
router.get('/registro', productsControllers.register); */


module.exports = router;