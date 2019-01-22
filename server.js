const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const history = require('connect-history-api-fallback');
const url = 'mongodb://localhost:27017';

let app = express();


app.use('/media', express.static(__dirname + '/media'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use(history({
  verbose: true
}));

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