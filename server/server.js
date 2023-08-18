const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const parsing = require('../server/api.js');
const fs = require('fs');
const mysql = require('mysql');

// JSON 파일
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

// MYSQL 회원가입 및 이메일 중복 검사
app.post('/signup', (req, res) => {
  const sentEmail = req.body.Email;
  const sentUserName = req.body.UserName;
  const sentPassword = req.body.Password;

  // sql문을 쿼리로 실행

  // 먼저 이메일 중복 검사 실행
  db.query(
    'SELECT COUNT(*) as count FROM users WHERE email = ?',
    [sentEmail],
    (err, rows, fields) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: 'Database error' });
      } else if (rows[0].count > 0) {
        // 이미 존재하는 이메일인 경우 처리
        res.send({ message: 'already-in-use' });
      } else {
        // 이메일이 중복되지 않은 경우 회원가입 진행
        db.query(
          'INSERT INTO users (email, username, password) values (?,?,?)',
          [sentEmail, sentUserName, sentPassword],
          (err, results) => {
            if (err) {
              console.log('err');
              res.send(err);
            } else {
              console.log('success');
              res.send({ message: 'user-added' });
            }
          }
        );
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
      } else if (results.length > 0) {
        res.send(results);
      } else {
        // 입력한 이메일 주소가 일치하지 않을 경우
        // console.log('user-not-found');
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
