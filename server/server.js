const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const parsing = require('../server/api.js');
const fs = require('fs');
// MYSQL
const mysql = require('mysql');

// 로그인 쿠키
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

// JSON 파일
const InformationJSON = fs.readFileSync('./CheeseInformation.json');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    //서버간의 통신에서 쿠키를 사용하기 때문 true로 설정
    credentials: true,
  })
);

// const corsOptions = {
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
//   credentials: true,
// };

// app.use(cors(corsOptions));

// app.use((_req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header('Access-Control-Allow-Methods', 'GET');
// })

// MYSQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Wlsdid!92',
  database: 'singupdb',
});

// connetct를 추가해야 된다.
db.connect();

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

// verifyUser
const verifyUser = (req, res, next) => {
  // const token = req.cooies.token; // 에러의 원인
  const token = req.cookies.token;
  if (!token) {
    return res.send({ message: 'not-authenticated' });
  } else {
    jwt.verify(token, 'jwt-secret-key', (err, decoded) => {
      if (err) {
        return res.send({ message: 'Token is not okay' });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};
// 메인화면
app.get('/header', verifyUser, (req, res) => {
  return res.send({ message: 'success', name: req.name });
});

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
      }
      if (results.length > 0) {
        // 성공했을 경우
        const name = results[0].username;
        const token = jwt.sign({ name }, 'jwt-secret-key', {
          expiresIn: '1d',
        });
        res.cookie('token', token);
        res.send({ message: 'success' });
      } else {
        // 입력한 이메일 주소가 일치하지 않을 경우
        res.send({ message: 'user-not-found' });
      }
    }
  );
});

// MYSQL 로그아웃
app.post('/logout', (req, res) => {
  res.clearCookie('token');
  return res.send({ message: 'success' });
});

// 크롤링 JSON
// Location 으로 InfromationJSON 전달
app.get('/api', (req, res) => {
  res.send(InformationJSON);
});

app.listen(PORT, () => {
  console.log(`Server is running on port {PORT}`);
});
