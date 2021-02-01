'use strict';
const {
  reboot,
  gpio
} = require('./requestCallback');

const requestIdMapping = {
  "0": reboot,
  "1": gpio
}

module.exports = requestIdMapping;