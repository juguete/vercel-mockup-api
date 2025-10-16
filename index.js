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
    booking_list: ['AL0000183850', 'AL0000183851','AL0000183852','AL0000183853']
  });
});

app.get('/vessel-voyages', (req, res) => 
  {
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

app.get('/customer_request', (req, res) => {
  res.json({
    vessel_voyage_lst: ['111', '222', 'customer request']
  });
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

const vvdMap = {
  CHINA0123E: "HJCN0123E",
  CHINA0123W: "HJCN0123W"
};

app.post("/vvd_search", (req, res) => {
  const { vvd } = req.body;

  const result = vvdMap[vvd] ?? null;

  res.json({
    vvd_no: result
  });
});


app.get('/test_json',(req, res) => {
  var data = {
    "result": {
        "procFlag": "",
        "creUsrId": "",
        "creDt": "",
        "updUsrId": "",
        "updDt": "",
        "rowSeq": "",
        "tenId": "",
        "stgId": "",
        "ofcId": "",
        "orgOfcId": "",
        "secOfcIds": "",
        "parameterString": "",
        "programNr": "",
        "chgSecOfcId": "",
        "traceId": "9fafe596-34d0-493b-904a-16a9bd2de79f",
        "bpmnPrcsId": "",
        "bpmnKeyVal": "",
        "bpmnStopYn": "",
        "dfAttrCntn1": "",
        "dfAttrCntn2": "",
        "dfAttrCntn3": "",
        "dfAttrCntn4": "",
        "dfAttrCntn5": "",
        "dfAttrCntn6": "",
        "dfAttrCntn7": "",
        "dfAttrCntn8": "",
        "dfAttrCntn9": "",
        "dfAttrCntn10": "",
        "dfAttrCntn11": "",
        "dfAttrCntn12": "",
        "dfAttrCntn13": "",
        "dfAttrCntn14": "",
        "dfAttrCntn15": "",
        "dfAttrCntn16": "",
        "dfAttrCntn17": "",
        "dfAttrCntn18": "",
        "dfAttrCntn19": "",
        "dfAttrCntn20": "",
        "attrRefVal": "",
        "attrCntn1": "",
        "attrCntn2": "",
        "attrCntn3": "",
        "attrCntn4": "",
        "attrCntn5": "",
        "attrCntn6": "",
        "attrCntn7": "",
        "attrCntn8": "",
        "attrCntn9": "",
        "attrCntn10": "",
        "attrCntn11": "",
        "attrCntn12": "",
        "attrCntn13": "",
        "attrCntn14": "",
        "attrCntn15": "",
        "cnclCgoReas": "",
        "spRrqstTpCd": "",
        "cnYn": "",
        "cpTpCd": "",
        "fieldCount": 0,
        "fieldList": [],
        "usrOfcId": "",
        "blNr": "",
        "dspBlNr": "",
        "bkgNr": "",
        "pgmNr": "",
        "usrId": "",
        "crrCd": "",
        "commonCd": "",
        "vslSvceLaneCd": "",
        "vslVoyDir": "",
        "fmPolCd": "",
        "toPodCd": "",
        "fmPolEtdDt": "",
        "toPolEtdDt": "",
        "fmPodEtbDt": "",
        "toPodEtbDt": "",
        "vvdInfoCount": 1,
        "vvdInfo": [
            {
                "procFlag": "",
                "creUsrId": "",
                "creDt": "",
                "updUsrId": "",
                "updDt": "2025-04-22 08:02",
                "rowSeq": "",
                "tenId": "",
                "stgId": "",
                "ofcId": "",
                "orgOfcId": "",
                "secOfcIds": "",
                "parameterString": "",
                "programNr": "",
                "chgSecOfcId": "",
                "traceId": "",
                "bpmnPrcsId": "",
                "bpmnKeyVal": "",
                "bpmnStopYn": "",
                "dfAttrCntn1": "",
                "dfAttrCntn2": "",
                "dfAttrCntn3": "",
                "dfAttrCntn4": "",
                "dfAttrCntn5": "",
                "dfAttrCntn6": "",
                "dfAttrCntn7": "",
                "dfAttrCntn8": "",
                "dfAttrCntn9": "",
                "dfAttrCntn10": "",
                "dfAttrCntn11": "",
                "dfAttrCntn12": "",
                "dfAttrCntn13": "",
                "dfAttrCntn14": "",
                "dfAttrCntn15": "",
                "dfAttrCntn16": "",
                "dfAttrCntn17": "",
                "dfAttrCntn18": "",
                "dfAttrCntn19": "",
                "dfAttrCntn20": "",
                "attrRefVal": "",
                "attrCntn1": "",
                "attrCntn2": "",
                "attrCntn3": "",
                "attrCntn4": "",
                "attrCntn5": "",
                "attrCntn6": "",
                "attrCntn7": "",
                "attrCntn8": "",
                "attrCntn9": "",
                "attrCntn10": "",
                "attrCntn11": "",
                "attrCntn12": "",
                "attrCntn13": "",
                "attrCntn14": "",
                "attrCntn15": "",
                "cnclCgoReas": "",
                "spRrqstTpCd": "",
                "cnYn": "",
                "cpTpCd": "",
                "fieldCount": 0,
                "fieldList": [],
                "usrOfcId": "",
                "blNr": "",
                "dspBlNr": "",
                "bkgNr": "",
                "pgmNr": "",
                "usrId": "",
                "crrCd": "",
                "commonCd": "",
                "lane": "NE9",
                "vvd": "HNAA2504W",
                "vslNm": "ASIA",
                "pol": "KRPUS",
                "terminal": "KRPUSHN",
                "cctDt": "2025-10-28 14:00",
                "cctTm": "",
                "etbDt": "2025-10-28 19:00",
                "etbTm": "19:00",
                "etdDt": "2025-10-29 18:00",
                "etdTm": "18:00",
                "pod": "CNSHA",
                "terminal2": "CNSHAYS",
                "etb2Dt": "2025-10-31 01:00",
                "etb2Tm": "01:00",
                "remark": "",
                "updateDt": "",
                "updateTm": "",
                "polClgPortSeq": "1",
                "podClgPortSeq": "1",
                "polPortSchSeq": "1725",
                "podPortSchSeq": "1727"
            }
        ]
    },
    "header": {
        "errorMessageProcessed": false
    }
}
  res.json(data);
});

module.exports = app;
