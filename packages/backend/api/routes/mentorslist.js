const express = require("express");
const router = express.Router();
const mentorslist = require('../controller/mentorslist');


// Open the connection to the server

router.get('/list', mentorslist.getData);


     
module.exports = router;
