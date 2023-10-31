const { verifyToken } = require('../utils/jwt');
// 서버에서 환경변수 사용시 코드 추가
require('dotenv').config();
// MYSQL
const mysql = require('mysql');

// MYSQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Wlsdid!92',
  database: 'singupdb',
});

// connetct를 추가해야 된다.
db.connect();

module.exports = {
  async checkTokens(req, res, next) {
    // access token 자체가 없는 경우엔 에러(401)를 반환
    try {
      if (req.cookies.accessToken === undefined) {
        console.log(req.cookies.accessToken);
        throw Error('API 사용 권한이 없습니다.');
      }

      const accessToken = verifyToken(req.cookies.accessToken);
      // 나중에 값을 변경하려고 시도하고 있으므로 변수를 상수로 선언함
      let refreshToken;
      //  const refreshToken = verifyToken(req.cookies.refresh);

      // 실제로 DB 조회
      if (req.cookies.refreshToken !== undefined) {
        const results = await db.query('SELECT * FROM tokens WHERE content=?', [
          req.cookies.refreshToken,
        ]);
        if (results.length > 0) {
          refreshToken = verifyToken(req.cookies.refreshToken);
          const userId = results[0].user_id; // 'user_no' 대신 'user_id' 사용

          if (accessToken === null) {
            if (refreshToken === undefined) {
              // case1: accse Token과 refreshToken 모두가 만료된 경우s
              throw Error('API 사용 권한이 없습니다.');
            } else {
              //case2: access Token은 만료됐지만, refresh Token은 유효한 경우
              const name = results[0].username;
              const newAccessToken = jwt.sign(
                { name },
                process.env.REACT_APP_ACCESS_SECRET,
                {
                  expiresIn: '1m',
                  issuer: 'About Tech',
                }
              );
              res.cookie('accessToken', newAccessToken);
              req.cookies.accessToken = newAccessToken;
              next();
            }
          } else {
            if (refreshToken === undefined) {
              // case3: accsess Token은 유효하지만, refresh token은 만료된 경우
              const newRefreshToken = jwt.sign(
                {},
                process.env.REACT_APP_REFRESH_SECRET,
                {
                  expiresIn: '5m',
                  issuer: 'About Tech',
                }
              );

              // DB에 새로 발급된 refesh Token 삽입하는 로직
              await db.query(
                `
                INSERT INTO 
                tokens(content, userId)
                VALUES 
                (?, ?);`,
                [newRefreshToken, userId]
              );

              res.cookie('refreshToken', newRefreshToken);
              req.cookies.refreshToken = newRefreshToken;
              next();
            } else {
              // case4: accesss token과 refresh token 모두가 유효한 경우
              next();
            }
          }
        }
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'server-error' });
    }
  },
};
