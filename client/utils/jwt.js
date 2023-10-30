// const jwt = require('jsonwebtoken');

// // 서버에서 환경변수 사용시 코드 추가
// require('dotenv').config();

// module.exports = {
//   verifyToken: (req, res, next) => {
//     const token = req.cookies.token;

//     if (!token) {
//       return res.status(401).send({ message: 'not-authorized' });
//     } else {
//       try {
//         const decoded = jwt.verify(token, process.env.REACT_APP_ACCESS_SECRET);
//         req.uesr = decoded; // 사용자 정보를 req 객체에 추가
//         next();
//       } catch (e) {
//         return res.send({ message: 'Token is not okay' });
//       }
//     }
//   },
// };
const jwt = require('jsonwebtoken');

// 서버에서 환경변수 사용시 코드 추가
require('dotenv').config();

module.exports = {
  verifyToken(token) {
    try {
      return jwt.verify(token, process.env.REACT_APP_ACCESS_SECRET);
    } catch (e) {
      return null;
    }
  },
};
