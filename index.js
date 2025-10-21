// api/index.js
import logging from './log/logging.js';
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(logging);

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/now', (req, res) => {
  res.json({now : new Date().toString})
})

app.get('/getapikey', (req, res) => {
  res.status(200).json({});
});


app.get('/customer_request', (req, res) => {

res.json({

vessel_voyage_lst: ['111', '222', 'customer request']

});

});


app.get('/bookings', (req, res) => {

res.json({

booking_list: ['AL0000184940','AL0000183850', 'AL0000183851','AL0000183852','AL0000183853']

});

});


module.exports = app;
