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
       next();
});

app.use('/api/v1/company', companies);
app.use('/api/v1/generate_uid', generate_uid);

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });

module.exports = app;
