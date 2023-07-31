const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// import parsing from './api';
// const parsing = require('./api.js');
const { parsing } = require('../server/api.js');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

app.use(express.static(__dirname + './client/public/index.html'));

app.get('/api', (req, res) => {
  parsing().then((response) => {
    res.send(response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port {PORT}`);
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
//   axios.get('http://localhost:' + PORT + '/api/cheesebon').then((response) => {
//     console.log(response.data);
//   });
// });
