const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const parsing = require('../server/api.js');
const fs = require('fs');

const InformationJSON = fs.readFileSync('./Information.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// cors
app.use(cors());

// 이 부분은 필요없다
const parsingData = async () => {
  const parsed = await parsing();
  // console.log(parsed, 'fff');
};

// app.use(express.static(__dirname + './client/public/index.html'));

// app.get('/api', (req, res) => {
//   // res.json(parsingData());
//   parsingData().then((response) => {
//     res.send(response);
//   });
//   // res.send(parsingData);
// });

app.get('/api', (req, res) => {
  res.send(InformationJSON);
});

app.listen(PORT, () => {
  console.log(`Server is running on port {PORT}`);
});
