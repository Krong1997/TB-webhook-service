'use strict';
import { Router } from 'express';
import handdleRequest from '../modules/handleRequest';
import websocketBroadcast from '../service/websocket';

const router = Router();
const broadcaster = websocketBroadcast({ port: 3001 });

function handleTBdata(params) {
  return {
    devicename: params.headers.devicename,
    devicetype: params.headers.devicetype,
    requestid: params.headers.requestid,
    data: JSON.parse(params.headers.data)
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
    return res.status(500).json({ status: 500, error });
  }
});

export default router;