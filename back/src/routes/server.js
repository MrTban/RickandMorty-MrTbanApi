const express = require('express');
const app = express();
const routes = require('./index');
const cors = require('cors');
// const { saveApiData } = require('../controllers/saveApiData');
// const { database } = require('../db/db');

app.use(cors());

app.use(express.json());

app.use('/', routes);

module.exports = app;
