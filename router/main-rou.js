const controller_main = require('../controller/main-con');

const express = require('express');
const router = express.Router();

router.get('/', controller_main.index);

module.exports = router