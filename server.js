const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');


let app = express();
app.use('/dist', express.static(__dirname + '/dist'));
//app.use(express.static(__dirname + '/src'));
//app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('server started ' + port);
});

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + port)

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Pass to next layer of middleware
  next()
})

app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html')
})