'use strict';
const router = require('express').Router();
const handdleRequest = require('../modules/handleRequest');
router.post('/test', async (req, res) => {
  try {
    const data = {
      devicename: req.headers.devicename,
      devicetype: req.headers.devicetype,
      requestid: req.headers.requestid,
      params: req.headers.params,
      method: req.headers.method
    };
    const response = handdleRequest(data);
    console.log(response);
    if (response.error) {
      return res.status(response.status).json(response);
    }
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

module.exports = router;