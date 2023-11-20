import React, { useEffect } from 'react';
import styled from 'styled-components';
import CommonStyles from '../../utils/CommonStyles';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Login() {
  const auth = useAuth();

  // 유저의 id를 전역으로 쓰기 위한 context api
  const { userId, setUsetId } = useContext(AuthContext);
  console.log(userId);

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  // 서버 응답 추가 코드문
  const submitLoginHandler = (event) => {
    event.preventDefault();

    // 이메일, 비밀번호 유효성 검사 확인
    if (!auth.checkValidation()) return;

    axios
      .post('http://localhost:5000/login', {
        Email: auth.email,
        Password: auth.password,
      })
      .then((res) => {
        if (res.status === 200) {
          alert('환영합니다!');
          navigate('/');
          setUsetId(res.data.userid); // 로그인 성공 후 userid 정보 가져오기
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          alert('회원을 찾을 수 없습니다. 회원가입을 먼저 진행해 주세요.');
          navigate('/Signup');
        }
      });
  };

  // 서버 응답 코드 추가하지 않은 코드문
  // const submitLoginHandler = (event) => {
  //   event.preventDefault();

  //   // 이메일, 비밀번호 유효성 검사 확인
  //   if (!auth.checkValidation()) return;

  //   axios
  //     .post('http://localhost:5000/login', {
  //       Email: auth.email,
  //       Password: auth.password,
  //     })
  //     .then((res) => {
  //       const message = res.data.message || '';
  //       if (message.includes('user-not-found')) {
  //         alert('회원을 찾을 수 없습니다. 회원가입을 먼저 진행해 주세요.');
  //         navigate('/Signup');
  //       } else if (message.includes('success')) {
  //         alert('환영합니다!');
  //         navigate('/');
  //       }
  //     });
  // };

  return (
    <CommonStyles>
      <LoginWrap>
        <LoginTitle>로그인</LoginTitle>
        <LoginForm onSubmit={submitLoginHandler}>
          <LoginEmailDiv>
            <LoginEmailLabel htmlFor='email'>이메일</LoginEmailLabel>
            <LoginEmailInput
              type='email'
              name='email'
              placeholder='이메일을 입력해주세요.'
              onChange={auth.changeEmail}
              ref={auth.emailRef}
            />
          </LoginEmailDiv>

          <LoginPasswordDiv>
            <LoginPasswordLabel htmlFor='password'>비밀번호</LoginPasswordLabel>
            <LoginPasswordInput
              type='password'
              name='password'
              placeholder='비밀번호를 입력해주세요.'
              onChange={auth.changePassword}
              ref={auth.passwordRef}
            />
          </LoginPasswordDiv>

          <LoginBtn type='submit'>로그인</LoginBtn>
          <Link to={'/Signup'}>
            <RegisterBtn>회원가입</RegisterBtn>
          </Link>
        </LoginForm>
      </LoginWrap>
    </CommonStyles>
  );
}

export default Login;
export const LoginWrap = styled.div`
  padding-top: 200px;
  width: 94%;
  max-width: 480px;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 65px;
`;
export const LoginTitle = styled.h1`
  text-align: center;
  font-size: 1.75em;
  font-weight: 500;
  letter-spacing: 0;
  margin: 0 0 50px;
`;
export const LoginForm = styled.form``;
// 이메일
export const LoginEmailDiv = styled.div`
  line-height: 45px;
  text-align: left;
  border-bottom: 1px solid #eee;
  padding: 15px 0;
`;
export const LoginEmailLabel = styled.label`
  width: 25%;
  min-width: 60px;
  display: inline-block;
`;
export const LoginEmailInput = styled.input`
  border-radius: 5px;
  height: 43px;
  /* width: calc(80% - 10px); */
  width: 100%;
  margin-top: -5px;
  background-color: inherit;
  border: 1px solid #ddd;
  padding-left: 5px;
`;
//패스워드
export const LoginPasswordDiv = styled.div`
  line-height: 45px;
  text-align: left;
  border-bottom: 1px solid #eee;
  padding: 15px 0;
`;
export const LoginPasswordLabel = styled.label`
  width: 25%;
  min-width: 60px;
  display: inline-block;
`;
export const LoginPasswordInput = styled.input`
  border-radius: 5px;
  height: 43px;
  /* width: calc(80% - 10px); */
  width: 100%;
  margin-top: -5px;
  background-color: inherit;
  border: 1px solid #ddd;
  padding-left: 5px;
`;
//로그인 버튼
export const LoginBtn = styled.button`
  background: #ffdb7e;
  transition: 1s;
  border: 1px solid #ffdb7e;
  color: #846e23;
  width: 100%;
  max-width: 480px;
  padding: 15px;
  margin-top: 30px;
  border-radius: 500px;
`;
//회원가입 버튼
export const RegisterBtn = styled.button`
  background: #000;
  transition: 1s;
  border: 1px solid #000;
  color: #fff;
  width: 100%;
  max-width: 480px;
  padding: 15px;
  border-radius: 500px;
  margin-top: 10px;
`;
export const ErrorSpan = styled.span`
  font-size: 14px;
  color: #ddd;
`;
