const RegisterDetails = require('../model/RegisterDetails');


// Post controller // 
exports.getData = (req, res, next) => {
    console.log("inside the action!", req.body);
    RegisterDetails.find({'_id' : '60ae60bdf64c9c452ca18fe4' }).then((result) => {
            console.log("result inside the call! ", result);
            res.status(200).json({
                message: "",
                data: result
            });
            next();
        }).catch((err) => {
            res.status(400).json({
                message: "product is not created",
                errro: err
            });
        });

}