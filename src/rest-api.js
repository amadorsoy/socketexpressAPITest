// * You may uncomment one of these modules:
const express = require('express');
const http = require('http');
// const koa = require('koa');
// const hapi = require('@hapi/hapi');
// const restify = require('restify');

module.exports = (stepService) => {
  const REST_PORT = 8080;

  // * TODO: Write the GET endpoint, using `stepService` for data access

  const app = express();
  const server = http.createServer(app);

  app.get('/users/:username/steps', function(req, res) {
    const data = stepService.get(req.params.username);
    if ( (data !== undefined) && (data !== null) ) {
      res.send(data);
    }
    else{
      res.status(404)
        .send("error: el usuario no existe");
    }
  });  

  server.listen(REST_PORT, () => {
    console.info(`\n\nExpress listen at http://localhost:${REST_PORT} \n`);
  });

};
