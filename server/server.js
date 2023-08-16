const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const parsing = require('../server/api.js');
const fs = require('fs');

// mysql
const mysql = require('mysql');

const InformationJSON = fs.readFileSync('./CheeseInformation.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Wlsdid!92',
  database: 'singupdb',
});

// cors
app.use(express.json());
app.use(cors());
// axios로 받을때 작성했던 코드
// pending이 떠서 await 비동기 처리함
// const parsingData = async () => {
//   const parsed = await parsing();
// };

// app.post('/singup', (req, res) => {
//   const sql = 'INSERT INTO login (`name`, `email`, `password`) VALUES (?)';
//   const values = [req.body.name, req.body.email, req.body.password];
//   db.query(sql, [values], (err, data) => {
//     if (err) {
//       return res.json('Error');
//     }
//     return res.json(data);
//   });
// });

app.post('/singup', (req, res) => {
  const sentEmail = req.body.Email;
  const sentUserName = req.body.UserName;
  const sentPassword = req.body.Password;
  const sentConfirmpassword = req.body.Confirmpassword;

  // 데이터베이스 테이블 유저
  const SQL =
    'INSERT INTO users (email, username, password, confirmpassword) VALUES (?,?,?,?)';
  const values = [sentEmail, sentUserName, sentPassword, sentConfirmpassword];

  // sql문을 쿼리로 실행
  db.query(SQL, values, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      console.log('success');
      res.send({ message: 'User added!' });
    }
  });
});

// Location 으로 InfromationJSON 전달
app.get('/api', (req, res) => {
  res.send(InformationJSON);
});

app.listen(PORT, () => {
  console.log(`Server is running on port {PORT}`);
});
