const express = require("express");
const router = express.Router();
const home = require('../controller/home')

router.get('/employee', home.getData);
router.post('/employee', home.postData);

module.exports = router;
