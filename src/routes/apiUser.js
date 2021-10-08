const express = require ('express');
const path = require('path');
const app = express ();
const apiUserController = require ('../controllers/apiUserController');

const router = express.Router();

router.get('/apiUser', apiUserController.index);

module.exports = router;