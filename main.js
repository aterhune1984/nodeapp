'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const ENVVAR = process.env.ENVVAR;
// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n' + ENVVAR );
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
