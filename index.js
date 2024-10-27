// const express = require('express');

// const app = express();

// const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send("App is runing!");
// })

// app.listen(port, () => {
//     console.log("app is runing at " + port);
// })

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('** Welcome to GlobalLogic!!!! **'); //write a response to the client
  res.end(); //end the response
}).listen(80); 