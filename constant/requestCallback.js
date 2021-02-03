'use strict';

export function reboot(params) {
  const _params = Object.assign({}, params);
  _params.callbackName = "reboot"
  // handle device response data...
  return _params;
}

export function gpio(params) {
  const _params = Object.assign({}, params);
  _params.callbackName = "gpio"
  // handle device response data...
  return _params;
}
