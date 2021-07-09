const express = require ('express');
const path = require('path');
const app = express ();

const router = express.Router();

const usersControllers = require('../controllers/users');


// router
router.get('/login', usersControllers.login);
router.get('/registro', usersControllers.register);


module.exports = router;