const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const parsing = require('../server/api.js');
const fs = require('fs');

const InformationJSON = fs.readFileSync('./CheeseInformation.json');

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
// app.get('/api', async (req, res) => {
//   // res.json({ users: ['userOne', 'userTwo'] });
//   res.send(parsing());
//   parsing().then((response) => res.send(response));
//   // console.log(response);
// });

app.get('/api', (req, res) => {
  res.send(InformationJSON);
});

app.listen(PORT, () => {
  console.log(`Server is running on port {PORT}`);
});
