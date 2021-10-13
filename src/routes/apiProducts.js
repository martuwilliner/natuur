const express = require ('express');
const path = require('path');
const app = express ();
const apiProductsController = require ('../controllers/apiProductsController');

const router = express.Router();

router.get('/', apiProductsController.index);
router.get('/:id', apiProductsController.show);

module.exports = router;