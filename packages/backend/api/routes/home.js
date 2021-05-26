const express = require("express");
const router = express.Router();
const ProductsList = require('../model/ProductsList');
const RegisterDetails = require('../model/RegisterDetails');



// const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://shopapi:shopapi@cluster0.genkf.mongodb.net/ProductDb?retryWrites=true&w=majority",
//     { useNewUrlParser: true, useUnifiedTopology: true });

// Open the connection to the server


router.get('/', (req, res, next) => {
    ProductsList.find().select().then((result) => {
        console.log("result", result);
        res.status(201).json({
            message: "List of products",
            data: result
        });
        next();
    }).catch((err) => {
        res.status(400).json({
            message: "Internal server ERROR!",
            errro: err
        });
    });
});

module.exports = router;
