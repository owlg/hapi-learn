//Packages info
/*
 Hapi - standard
 Inert - serves static files/pages

*/

'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 80
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {

        return reply('hello world');
    }
});

//Another important route

server.route({
  method: 'GET',
  path:'/success',
  handler: function (request, reply) {
    return reply('SUCCESS!');
  }
});

//Routing and saying custom HELLO message
server.route({
  method: 'GET',
  path:'/user/{name}',
  handler: function (request, reply) {
    reply('Hello ' +encodeURIComponent(request.params.name) + '!');
  }
});


// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
