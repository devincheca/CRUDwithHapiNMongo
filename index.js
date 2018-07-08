'use strict';

const Hapi = require('hapi');

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
    return h.file('./public/{request.params.name}');
  }
});

const init = async () =>
{
  await server.register(require('inert'));
  server.route(
  {
   method: 'GET',
   path: '/{name}',
   handler: (request, h) =>
   {
     return h.file('./public/{request.params.name}');
   }
  });
  await server.start();
  console.log('Server running at: ${server.info.uri}');
};

process.on('unhandledRejection', (err) =>
{
  console.log(err);
  process.exit(1);
});

init();

