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

// MYSQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Wlsdid!92',
  database: 'singupdb',
});

// connetct를 추가해야 된다.
db.connect();

// cors
app.use(express.json());
app.use(cors());
// db.query('select * from users', (err, results, fields) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(results);
// });

// db.end();

// axios로 받을때 작성했던 코드
// pending이 떠서 await 비동기 처리함
// const parsingData = async () => {
//   const parsed = await parsing();
// };

// MYSQL 회원가입
app.post('/signup', (req, res) => {
  const sentEmail = req.body.Email;
  const sentUserName = req.body.UserName;
  const sentPassword = req.body.Password;
  // console.log(sentEmail);
  // 데이터베이스 테이블 유저
  // const SQL = `INSERT INTO users (email, username, password) VALUES (?,?,?)`;

  // sql문을 쿼리로 실행
  db.query(
    'INSERT INTO users (email, username, password) values (?,?,?)',
    [sentEmail, sentUserName, sentPassword],
    (err, results) => {
      if (err) {
        console.log('err');
        res.send(err);
      } else {
        console.log('success');
        res.send({ message: 'User added!' });
      }
    }
  );
});

// MYSQL 로그인
app.post('/login', (req, res) => {
  const sentEmail = req.body.Email;
  const sentPassword = req.body.Password;

  db.query(
    'SELECT * FROM users WHERE email = ? && password = ?',
    [sentEmail, sentPassword],
    (err, results) => {
      if (err) {
        console.log('err');
        res.send(err);
      }
      if (results.length > 0) {
        res.send(results);
      } else {
        // 입력한 이메일 주소가 일치하지 않을 경우
        console.log('user-not-found');
        res.send({ message: 'user-not-found' });
      }
    }
  );
});
// 크롤링 JSON
// Location 으로 InfromationJSON 전달
app.get('/api', (req, res) => {
  res.send(InformationJSON);
});

app.listen(PORT, () => {
  console.log(`Server is running on port {PORT}`);
});
