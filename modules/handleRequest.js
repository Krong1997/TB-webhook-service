'use strict';
import { requestIdMapping } from '../constant/requestId';

export default function handdleRequest(params) {
  const {
    requestid
  } = params;
  const callback = requestIdMapping[requestid];
  if (!callback) return { status: 500, error: `requestid:${requestid} callback not found` };
  const response = callback(params);

  return response;
}