// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const reactApp = require('./routes/reactapp');
const api = require('./routes/api');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// use the api router for /api calls and all else routed to react router
app.use('/api', api);
app.use('/', reactApp);

module.exports = app;
