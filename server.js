const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

let app = express();
app.use(serveStatic(__dirname + "/dist"));
console.log(__dirname);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('server started ' + port);
});