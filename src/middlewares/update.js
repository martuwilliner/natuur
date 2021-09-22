const {body} = require('express-validator');
const {User} = require("../database/models");

module.exports = [
    body("name").notEmpty().inLength({min:5}),
    body("descr").inLength({min:20}),
]
