//  server.js
'use strict';

let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let parser = require('../parser/parser');

module.exports.start = (options) => {

  return new Promise((resolve, reject) => {

    //  Make sure we have a repository and port provided.
    if(!options.port) throw new Error("A server must be started with a port.");

    //  Create the app, add some logging.
    let app = express();
    app.use(morgan('dev'));

    //  Parse plain text from the the bodies.
    app.use(bodyParser.text())

    //  Add the APIs to the app.
    app.post('/parse', (req, res) => {
      console.log("Req: " + req.body);
      res.status(200).send(parser.parse(req.body));
    });

    //  Start the app, creating a running server which we return.
    let server = app.listen(options.port, () => {
      resolve(server);
    });

  });
};