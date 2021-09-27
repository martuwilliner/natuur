const {body} = require('express-validator');
const {User} = require("../database/models");

module.exports = [
    body("name").notEmpty().isLength({min:5}),
    body("descr").isLength({min:20}),
]
