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

app.get('/empty-container/pickup', (req, res) => {
  res.json({
    booking_no: 'BK20240501',
    empty_status: 'READY',
    empty_vessel_yard : 'maxico',
    empty_boolean: true
  });
});

app.get('/full-container/return', (req, res) => {
  res.json({
    booking_no: 'BK20240501',
    return_status: 'READY',
    return_vessel_yard : 'maxico',
    return_boolean: true
  });
});

app.get('/full-container/import', (req, res) => {
  res.json({ status: 'READY' });
});

app.get('/bookings', (req, res) => {
  res.json({
    booking_list: ['BK20240501', 'BK20240502']
  });
});

app.get('/vessel-voyages', (req, res) => {
  res.json({
    vessel_voyage_lst: ['bk1234', 'bk4444', 'bk7777']
  });
});

app.get('/vessel-voyage-comparisons', (req, res) => {
  res.json({ voyage_status: '200' });
});

app.get('/vessel-voyages/validation', (req, res) => {
  res.json({
    booking_no: 'BK20240501',
    vessel_voyage_code: 'bk1234',
    vessel_voyage_status: 'READY',
    change_vessel_yard : 'maxico',
    change_return_boolean: true
  });
});

app.get('/vessel-voyage/dict', (req, res) => {
  res.json({ vessel_voyage_code_dict: 'PUS10004' });
});

app.post('/vessel-voyage/change', (req, res) => {
  res.json({ check: 'dummy' });
});

app.get('/trx/job-orders', (req, res) => {
  res.json({ check: 'dummy' });
});

app.post('/trx/job-orders', (req, res) => {
  res.json({ check: 'dummy' });
});

app.get('/vessel-voyage/change', (req, res) => {
  res.json({ check: 'dummy' });
});

module.exports = app;
