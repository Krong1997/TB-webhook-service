'use strict';
const router = require('express').Router();
const handdleRequest = require('../modules/handleRequest');
const websocketBroadcast = require('../service/websocket');
const broadcaster = websocketBroadcast({ port: 3001 });

function handleTBdata(params) {
  return {
    devicename: params.headers.devicename,
    devicetype: params.headers.devicetype,
    requestid: params.headers.requestid,
    data: params.headers.data
  }
}

router.post('/test', async (req, res) => {
  try {
    const data = handleTBdata(req);
    const response = handdleRequest(data);

    if (response.error) {
      console.log(response);
      return res.status(response.status).json(response);
    }

    broadcaster(response);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
});

module.exports = router;