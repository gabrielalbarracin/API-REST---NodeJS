'use strict';

//configuracion express

const express = require('express');
const bodyParser = require('body-parser'); //midware
const app = express();
const api = require('./routes');



app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use('/api', api);





module.exports = app;
