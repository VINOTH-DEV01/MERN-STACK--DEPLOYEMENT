const http = require("http");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
const app = require('./app');
const express = require("express");                                                                                                                                                                      

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
//     app.use("*", (req,res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }
// const port = process.env.port || 8000;  
// const server = http.createServer(app);
// server.listen(port, () => {
//     console.log("sever started!");
// });




var port = process.env.PORT || 3002;
const server = http.createServer(app);
server.listen(port, "0.0.0.0", function() {
console.log("Listening on Port: =>  3002");
});    