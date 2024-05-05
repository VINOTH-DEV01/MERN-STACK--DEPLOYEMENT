const EmployeeList = require('../model/EmployeeList');
const mongoose = require("mongoose");

// get controller //           
exports.getData = (req, res) => {
    EmployeeList.find().then((result) => {
            console.log("result inside the call! ", result);
            res.status(200).json({
                message: "",
                data: result
            }); 
        }).catch((err) => {
            res.status(400).json({
                message: "product is not created",
                errro: err
            });
        });
                       
}

// Post controller // 
exports.postData = (req, res) => {
    // res.send("<h1>zxcczc</h1>");
    console.log("inside the action!", req.body);
    const register = new EmployeeList({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        loc: req.body.loc,
    });
    register.save().then((result) => {
        console.log("result inside the call! ", result);
        res.status(201).json({
            message: "",
            data: result
        }); 
    }).catch((err) => {
        res.status(400).json({
            message: "product is not created",
            errro: err
        });
    });
}
