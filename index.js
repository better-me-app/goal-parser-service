//	index.js
//
//  Entrypoint to the application.
var server = require('./server/server');
var config = require('./config/config');

//  Lots of verbose logging when we're starting up...
console.log("--- {Parse} Service---");
console.log("Connecting to customer repository...");

//  Log unhandled exceptions.
process.on('uncaughtException', function(err) {
  console.error('Unhandled Exception', err);
});
process.on('unhandledRejection', function(err, promise){
  console.error('Unhandled Rejection', err);
});

server.start({
  port: config.port
}).then((app) => {
  console.log("Server started successfully, running on port " + config.port + ".");
});