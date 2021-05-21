const express = require("express");
const router = express.Router();
const ProductsList = require('./ProductsList');

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://shopapi:shopapi@cluster0.genkf.mongodb.net/ProductDb?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true });

// Open the connection to the server


router.get('/user', (req, res) => {
    console.log("sdsdsdsdsdsdss====================");
    ProductsList.find().select().then((result) => {
        if (!result) {
            res.status(404).json({
                message: "product id  is not available",
                erro: err
            });
        }
        res.status(200).json({
            message: "Your List of products",
            productList: result
    });
    }).catch((err) => {
        res.status(500).json({
            message: "Internal Server Error!",
            erro: err
        });
    });
});





module.exports = router;
