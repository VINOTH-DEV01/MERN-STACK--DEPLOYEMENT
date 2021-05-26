const express = require("express");
const router = express.Router();
const RegisterDetails = require('../controller/register');

// Open the connection to the server

router.post('/', RegisterDetails.postData);
router.get('/getMentors', RegisterDetails.getData);
router.get('/findUser', RegisterDetails.getData);


     
module.exports = router;
