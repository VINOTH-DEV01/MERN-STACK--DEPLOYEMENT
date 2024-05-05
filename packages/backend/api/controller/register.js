const mongoose = require("mongoose");        
const RegisterDetails = require('../model/RegisterDetails');


// Post controller // 
exports.postData = (req, res) => {
    console.log("inside the action!", req.body);
    const product = new RegisterDetails({
        _id: new mongoose.Types.ObjectId,
        fname: req.body.fname,
        lname: req.body.lname,
    });
    console.log("product - 111111", product);
    product.save().then((result) => {
        console.log("result inside the call! ", result);
        res.status(201).json({
            message: "your product is created succefully",
            data: result
        });
        // next();
    }).catch((err) => {
        res.status(400).json({
            message: "product is not created",
            error: err
        });
    });

}
exports.getData = (req, res, next) => {
    console.log("inside the action!");
    RegisterDetails.find().select().then((result) => {
        res.status(200).json({
            message: "List of Mentors ",
            data: result
        });
        next();
    }).catch((err) => {
        res.status(400).json({
            message: "Internal Server ERROR",
            errro: err
        });
    });

}