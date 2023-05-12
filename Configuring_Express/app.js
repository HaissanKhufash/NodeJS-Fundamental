'use strict'
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      logger = require('morgan'),
      router = require('./routes/index'),
      publicDir = express.static(`${__dirname}/public`),
      viewsDir = `${__dirname}/views`,
      port = (process.env.PORT || 3000);

app
    .set( 'port', port )
    .set( 'views', viewsDir )
    .set( 'view engine', 'pug' )

    .use( bodyParser.urlencoded({extended: true}) )
    .use( logger(':method :url :status :res[content-length] - :response-time ms') )
    .use( publicDir )

    .use( router )

module.exports = app