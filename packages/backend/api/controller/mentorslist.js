const RegisterDetails = require('../model/RegisterDetails');


// Post controller // 
exports.getData = (req, res, next) => {
    console.log("inside the action!", req.body);
    RegisterDetails.find().select().then((result) => {
            res.status(200).json({
                message: "List okf all Register mentors",
                data: result
            });
            next();
        }).catch((err) => {
            res.status(500).json({
                message: "Internal Server Error",
                errro: err
            });
        });

}