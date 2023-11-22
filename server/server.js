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
const { ifError } = require('assert');

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
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    //서버간의 통신에서 쿠키를 사용하기 때문 true로 설정
    credentials: true,
  })
);

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
  // const token = req.cooies.token; // 스펠링이 에러의 원인
  const token = req.cookies.token;
  // token이 없을 경우
  if (!token) {
    return res.status(401).send({ message: 'not-authenticated' });
  } else {
    jwt.verify(token, 'jwt-secret-key', (err, decoded) => {
      // 에러일 경우
      if (err) {
        return res.status(401).send({ message: 'Token is not okay' });
      } else {
        // token이 존재할 경우
        // req.name은 로그인(모든 유효성 검사에 통과한)이 될 경우 그 유저의 UserName이다.
        // 로그인 부분에서  const name = results[0].username; 모든것이 일치할 경우 0번째의 인덱스인 username을 가져오는것이다.
        // const token = jwt.sign({ name })는 구조 분해 할당이 아닌 const person1 = { name: name, age: age } 이런식으로
        // name 키를 가지고 있고 원래 변수 name의 값을 포함하는것이다.
        // const token = jwt.sign({ name }, 'jwt-secret-key', { expiresIn: '1d',});
        req.name = decoded.name;
        req.userid = decoded.userid;
        // console.log(req.name); // 로그인시 username이 찍힌다.
        next();
      }
    });
  }
};

// 메인화면
app.get('/header', verifyUser, (req, res) => {
  return res
    .status(200)
    .send({ message: 'success', name: req.name, userid: req.userid });
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
        const userid = results[0].id;
        const name = results[0].username;
        const token = jwt.sign({ name, userid }, 'jwt-secret-key', {
          expiresIn: '1d',
        });
        res.cookie('token', token);
        res.status(200).send({ message: 'success', userid });
      } else {
        // 입력한 이메일 주소가 일치하지 않을 경우
        res.status(401).send({ message: 'user-not-found' });
      }
    }
  );
});

// MYSQL 로그아웃
app.post('/logout', (req, res) => {
  res.clearCookie('token');
  return res.status(200).send({ message: 'success' });
});

// 장바구니
app.post('/cart', (req, res) => {
  const cart = req.body;

  // cart 데이터를 MySQL에 저장하는 쿼리를 작성
  const query = 'INSERT INTO cart (cart_data) VALUES (?)';

  db.query(query, [JSON.stringify(cart)], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: 'Server Error' });
    } else {
      console.log('cart_date', cart);
      res.status(200).send({ message: 'Cart saved successfully' });
    }
  });
});

// 장바구니 정보 가져오기
app.get('/getPaidCart', (req, res) => {
  const query = 'SELECT * FROM cart';

  db.query(query, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: 'Server Error' });
    } else {
      const parseCartResults = result.map((result) => {
        return {
          ...result,
          cart_data: JSON.parse(result.cart_data),
        };
      });
      // 결과를 클라이언트에게 반환
      res.status(200).send({ cartdata: parseCartResults });
    }
  });
});

// 결제 상품 취소
app.delete('/delete/:id', (req, res) => {
  const itemId = parseInt(req.params.id);

  const query = 'DELETE FROM cart WHERE id = ?';

  db.query(query, [itemId], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: 'Server Error' });
    } else {
      res.status(200).send({ message: 'Successfully deleted' });
    }
  });
});

// 결제 날짜 시간 취소
app.delete('/deleteDateTime/:id', (req, res) => {
  const DateTimeId = parseInt(req.params.id);

  const query = 'DELETE FROM paidTime WHERE id = ?';

  db.query(query, [DateTimeId], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: 'Server Error' });
    } else {
      res.status(200).send({ message: 'Successfully deleted' });
    }
  });
});

// 특정 날짜,시간에 대한 모든 예약 취소
// app.delete('/deleteAllOnDateAndTime/:date/:time', (req, res) => {
//   const date = req.params.date;
//   const time = req.params.time;
//   const query =
//     "DELETE FROM cart WHERE JSON_EXTRACT(cart_data, '$.cartDT.formattedDate') = ? AND JSON_EXTRACT(cart_data, '$.cartDT.time.time') = ?";
//   db.query(query, [date, time], (error, result) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send({ message: 'Server Error' });
//     } else {
//       res
//         .status(200)
//         .send({
//           message: 'Successfully deleted all orders on the date and time',
//         });
//     }
//   });
// });

// 날짜와 시간 저장
app.post('/savePaidTime', (req, res) => {
  const dateTime = req.body.dateTime;

  // dateTime 데이터를 MySQL에 저장하는 쿼리를 작성
  const query = 'INSERT INTO paidTime (dateTime_data) VALUES (?)';

  db.query(query, [JSON.stringify(dateTime)], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: 'Server Error' });
    } else {
      console.log('dateTime_data', dateTime);
      res.status(200).send({ message: 'DateTime save successful' });
    }
  });
});

// 날짜와 시간 가져오기
app.get('/getPaidTime', (req, res) => {
  // paidTime' 테이블에서 데이터를 가져오는 쿼리를 작성
  const query = 'SELECT * FROM paidTime';

  db.query(query, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: 'Server Error' });
    } else {
      const parsedResults = result.map((result) => {
        return {
          ...result,
          dateTime_data: JSON.parse(result.dateTime_data),
        };
      });
      // 결과를 클라이언트에게 반환
      res.status(200).send({ dateTime: parsedResults });
    }
  });
});

// 닉네임 변경
app.post('/changeUsername', (req, res) => {
  const userId = req.body.userId;
  const newUsername = req.body.NewUsername;

  db.query(
    'UPDATE users SET username = ? WHERE id =?',
    [newUsername, userId],
    (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send({ message: 'Server Error' });
      } else {
        console.log('NewUsername changed successful');
        res.status(200).send({ message: 'username-updated' });
      }
    }
  );
});

// 크롤링 JSON
// Location 으로 InfromationJSON 전달
app.get('/api', (req, res) => {
  res.send(InformationJSON);
});

// PORT 확인
app.listen(PORT, () => {
  console.log(`Server is running on port {PORT}`);
});
