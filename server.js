const express = require('express');
const path = require('path');
const assert = require('assert');
const history = require('connect-history-api-fallback');

const database = require('./lib/database.js')
let dbInit = database.init();
let app = express();

app.use(require('./lib/contactRoutes/contactEndpoints.js').router)
app.use('/media', express.static(__dirname + '/media'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use(history({
  index: '/'
}));

const port = process.env.PORT || 5000;


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

dbInit.then(function () {
  app.listen(port, () => {
    console.log('server started ' + port);
  });
})

app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html')
})