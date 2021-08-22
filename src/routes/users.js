const express = require ('express');
const usersControllers = require('../controllers/users');
const register = require("../middlewares/register")
const hash = require("../middlewares/hash")
const login = require("../middlewares/login")
const remember = require("../middlewares/remember")
const auth = require("../middlewares/auth")

const router = express.Router();

// router
router.get('/login', usersControllers.login);
router.get('/registro', usersControllers.register);
router.get('/logout', usersControllers.logout);
router.get('/perfil', usersControllers.profile);

router.post('/access', [login,remember] , usersControllers.access);
router.post('/save', [register,hash] , usersControllers.save);


module.exports = router;