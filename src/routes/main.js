const express = require ('express');
const path = require('path');
const app = express ();

const router = express.Router();

const mainControllers = require('../controllers/main');


// router
router.get('/', mainControllers.index);
/* router.get('/nosotros', mainControllers.nosotros); */
/* router.get('/contacto', mainControllers.contacto); */

module.exports = router;