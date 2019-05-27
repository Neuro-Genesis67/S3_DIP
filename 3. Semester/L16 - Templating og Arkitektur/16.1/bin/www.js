/**
 * Module dependencies.
 */

var app = require('../app');
var http = require('http');

/**
 * Set up port
 */

var port = 8080;
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);