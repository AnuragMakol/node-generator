var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors')
var dotenv = require('dotenv').config()

var app = express();

// Swagger Init
const expressSwagger = require('express-swagger-generator')(app);
expressSwagger({
  swaggerDefinition: {
    info: {
      title: process.env.SWAGGER_TITLE,
      description: process.env.SWAGGER_DESCRIPTION,
      version: process.env.SWAGGER_VERSION,
    },
    host: process.env.SWAGGER_API_HOST,
    consumes: [
      "application/json"
    ],
    produces: [
      "application/json"
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: "Authentication Token for Boilerplate API",
      }
    }
  },
  basedir: __dirname, //app absolute path
  files: ['./app/controllers/*.js'] //Path to the API handle folder
});

// Express Settings
app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// CORS Addtiion
app.use(cors());
app.options('*', cors());

// File Upload Limits
app.use(bodyParser.json({ limit: '128mb' }));
app.use(bodyParser.urlencoded({ limit: '128mb', extended: true }));

// Routes Init
app.use('/', require('./routes'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send({
    status: err.status,
    message: err.message
  });
});

module.exports = app;