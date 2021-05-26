const express = require("express");
const app = express();
const mongodb = require('mongodb');

// const morgan = require('morgan');

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://shopapi:shopapi@cluster0.genkf.mongodb.net/ProductDb?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true });

//  Body parser  req getting  // 
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));  

app.use(express.static("public"));
app.set("view engine", "ejs");

const homeRoute = require('./packages/backend/api/routes/home');
const registerRoute = require('./packages/backend/api/routes/register');
const loginuserRoute = require('./packages/backend/api/routes/login');
const mentorslist = require('./packages/backend/api/routes/mentorslist');


app.use('/', homeRoute);
app.use('/register', registerRoute);
app.use('/user', loginuserRoute);
app.use('/mentors', mentorslist);




module.exports = app;

