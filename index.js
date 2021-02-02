'use strict';
const express = require('express');

const router = require('./service');

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("server listen om port 3000");
});
