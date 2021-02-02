'use strict';
const WebSocket = require('ws');

function websocketBroadcast(server) {
  const wss = new WebSocket.Server(server);
  wss.on('connection', function connection(ws) {
    ws.send('connection success');
  });

  wss.on('error', function name(ws) {
    ws.send('connection error');
  })

  wss.on('close', function name(ws) {
    ws.send('connection close');
  })

  return (data) => {
    wss.clients.forEach(client => {
      client.send(JSON.stringify({
        ts: Date.now(),
        data: data
      }));
    });
  }
}

module.exports = websocketBroadcast;