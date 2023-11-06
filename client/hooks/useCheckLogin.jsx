import jwt from 'jsonwebtoken';

const checkLogin = () => {
  const token = document.cookie.split('=')[1];

  // 첫 번째 콘솔로그 출력
  // 0 :  "token"
  // 1 :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi67CV7LqE67O0IiwiaWF0IjoxNjkzMDQ2OTI5LCJleHAiOjE2OTMxMzMzMjl9.pG00P1Sd7oPa89_NOQqgB6ik2FTFZfxXlUaLdGLHwm8"
  // console.log(document.cookie.split('='));

  // 두 번째 콘솔로그 출력
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi67CV7LqE67O0IiwiaWF0IjoxNjkzMDQ3Mjg1LCJleHAiOjE2OTMxMzM2ODV9.4_X8C8116UiYjcx5CTYCsozuY-Rra_AIeo0gCcGeyfk
  // console.log(document.cookie.split('=')[1]);

  // 쿠키가 없으면 로그아웃 상태
  if (!token) {
    return { loggedIn: false };
  }

  // 만료 기간이 지났거나 변경된 토큰이면 예외 처리
  try {
    const decoded = jwt.decode(token, process.env.REACT_APP_ACCESS_SECRET);

    // 해당 username 콘솔로그
    // console.log(decoded.name);
    // exp가 현재 시간보다 작으면 false
    if (decoded.exp * 1000 < Date.now()) {
      return { loggedIn: false };
    } else {
      return { loggedIn: true, name: decoded.name };
    }
  } catch (err) {
    console.log(err);
    return { loggedIn: false };
  }
};

export default checkLogin;
