const express = require("express");
const router = express.Router();
const loginUser = require('../controller/login');


// Open the connection to the server

router.get('/mentorLogin', loginUser.getData);
router.get('/learnerLogin', loginUser.getData);


     
module.exports = router;
