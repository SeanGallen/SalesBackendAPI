var express = require('express');


var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var companies = require('./routes/companies');
var generate_uid = require('./routes/generate_uid');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use((res, req, next) => 
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
});

app.use('/api/v1/company', companies);
app.use('/api/v1/generate_uid', generate_uid);

module.exports = app;
