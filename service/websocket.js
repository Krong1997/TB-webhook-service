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
    const _data = JSON.stringify({
      ts: Date.now(),
      ...data
    });

    wss.clients.forEach(client => {
      client.send(_data, (err) => {
        if(err) {
          console.log('websocket broadcast error: ', err);
        }
        else {
          console.log('send data success: ', _data);
        }
      });
    });
  }
}

module.exports = websocketBroadcast;