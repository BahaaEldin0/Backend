// users/routes.js
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/createaccount', controller.createUser);

module.exports = router;
