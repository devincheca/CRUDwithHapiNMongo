'use strict';

const Hapi = require('hapi);

const server = Hapi.server(
{
  host: 'localhost',
  port: 8000
});

server.route(
{
  method: 'GET',
  path: '/{name}',
  handler: (request, h) =>
  {
    
  }
});
