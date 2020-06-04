const WebSocketServer = require('ws').Server;

module.exports = (stepService) => {
  const WEBSOCKET_PORT = 8081;

  const wsServer = new WebSocketServer({ port: WEBSOCKET_PORT});

  // * TODO: Write the WebSocket API for receiving `update`s,
  //         using `stepService` for data persistence.
  //         Make sure to return an instance of a WebSocketServer.

  wsServer.on('connection', (ws) => {   
    ws.on('message', (message) => {     
      jsonIn = JSON.parse(message);
      stepService.add(jsonIn.username, jsonIn.ts, jsonIn.newSteps);
      const datareturn = stepService.getAll();
      console.log(datareturn);
      ws.send(JSON.stringify(datareturn));
    });
  });

  return wsServer;
};
