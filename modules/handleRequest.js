'use strict';
const mapping = require('../constant/requestId');

function handdleRequest(params) {
  const {
    requestid
  } = params;
  const callback = mapping[requestid];
  if (!callback) return { status: 500, error: `requestid:${requestid} callback not found` };
  const response = callback(params);

  return response;
}

module.exports = handdleRequest;