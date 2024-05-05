const express = require("express");
const cors = require("cors");





const app = express();
const mongoose = require("mongoose");                                                 
app.use(cors()); // for this must need to add in our project with help of ( npm install cors --save )  -- bcz then only nodejs server allow data to use client side url. ok got it (cors - means cross origin resource sharing ) . // 

// //  Body parser  req getting  // 
app.use(express.json()); //  = object to JSON CONVERT .

// its used to add html element to node js code we musrt use this below middleware.
// app.use(express.static("public"));
// app.set("view engine", "ejs"); // 


// mongoDB connections // 
const DB_URL = "mongodb://localhost:27017/test";
mongoose.connect(DB_URL);
const connectonStatus  = mongoose.connection; 

connectonStatus.once("open", () => {
    console.log('MongoDB Connection got SUCCESS!');
});
connectonStatus.on('error', () => {
    console.log("MongoDB connection got FAILURE!");
});


// ROUTE PATHS// 
const homeRoute = require('./packages/backend/api/routes/home');
const registerRoute = require('./packages/backend/api/routes/register');
const loginuserRoute = require('./packages/backend/api/routes/login');
const mentorslist = require('./packages/backend/api/routes/mentorslist');


app.use('/', homeRoute);
// app.use('/register', registerRoute);
// app.use('/user', loginuserRoute);
// app.use('/mentors', mentorslist);




module.exports = app;






