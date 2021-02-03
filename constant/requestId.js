'use strict';
import {
  reboot,
  gpio
} from './requestCallback';

export const requestIdMapping = {
  "0": reboot,
  "1": gpio
}

