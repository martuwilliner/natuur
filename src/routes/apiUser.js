const express = require ('express');
const path = require('path');
const app = express ();
const apiUserController = require ('../controllers/apiUserController');

const router = express.Router();

router.get('/', apiUserController.index);
router.get('/:id', apiUserController.show);

module.exports = router;