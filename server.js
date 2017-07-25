const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const createClass = require('asteroid').createClass;
const ws = require('ws');
const fs = require('fs');
const path = require('path');

const indexFile = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const reportFile = fs.readFileSync(path.join(__dirname, 'report.html'), 'utf8');
const reportKeys = [
  'reportNo',
  'ProductName',
  'ModelType',
  'Manufacturer',
  'KindofTest',
  'TestCriteria',
  'SampleGrade',
  'TestItems',
  'TestConclusion',
  'TestDate'
];

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(favicon(__dirname + '/static/favicon.ico'));  // eslint-disable-line

app.get('/alipay/notify/', function(req, res) {
  const Asteroid = createClass();
  const asteroid = new Asteroid({
    endpoint: 'ws://127.0.0.1:3333/websocket',
    SocketConstructor: ws
  });

  asteroid.call('users.alipayConfirmPayment', req.body);
  res.status(200).send('OK');
});

app.get('/report/:reportNo', function(req, res) {
  const reportNo = req.params.reportNo;

  const Asteroid = createClass();
  const asteroid = new Asteroid({
    endpoint: 'ws://127.0.0.1:3333/websocket',
    SocketConstructor: ws
  });

  asteroid.call('reports.get', reportNo).then(function(data) {
    if (data) {
      let html = reportFile;
      for (const key of reportKeys) {
        html = html.replace('%%' + key + '%%', data[key] || '');
      }
      res.status(200).send(html);
    } else {
      res.status(404).send('Not Found');
    }
  }, function(err) {
    res.status(500).send('Internal Server Error');
  });
});

app.get('/', function (req, res) {
  res.status(200).send(indexFile);
});

app.listen(8080, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('App started listening on port 8080');
  }
});
