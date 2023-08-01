const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const parsing = require('../server/api.js');
const fs = require('fs');

const InformationJSON = fs.readFileSync('./Information.json');
// const newsData = JSON.parse(newsData)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// cors
app.use(cors());

const parsingData = async () => {
  const parsed = await parsing();
  console.log(parsed, 'fff');
};

// app.use(express.static(__dirname + './client/public/index.html'));

app.get('/api', (req, res) => {
  // res.json(parsingData());
  res.send(InformationJSON);
  // parsingData().then((response) => {
  //   res.send(response);
  // });
  // res.send(parsingData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port {PORT}`);
});
