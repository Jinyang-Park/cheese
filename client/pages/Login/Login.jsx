import React from 'react';
import styled from 'styled-components';
import CommonStyles from '../../utils/CommonStyles';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <CommonStyles>
      <LoginWrap>
        <LoginTitle>로그인</LoginTitle>
        <LoginForm>
          <LoginEmailDiv>
            <LoginEmailLabel htmlFor='email'>이메일</LoginEmailLabel>
            <LoginEmailInput type='email' />
          </LoginEmailDiv>

          <LoginPasswordDiv>
            <LoginPasswordLabel htmlFor='password'>비밀번호</LoginPasswordLabel>
            <LoginPasswordInput type='password' />
          </LoginPasswordDiv>

          <LoginBtn>로그인</LoginBtn>
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
  margin: 0 0 100px;
  width: 94%;
  max-width: 480px;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
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
  width: 20%;
  min-width: 60px;
  display: inline-block;
`;
export const LoginEmailInput = styled.input`
  border-radius: 5px;
  height: 43px;
  width: calc(80% - 10px);
  margin-top: -5px;
  background-color: inherit;
  border: 1px solid #ddd;

  /* ::placeholder {
    font-size: 13px;
    color: #494848;
  } */
`;
//패스워드
export const LoginPasswordDiv = styled.div`
  line-height: 45px;
  text-align: left;
  border-bottom: 1px solid #eee;
  padding: 15px 0;
`;
export const LoginPasswordLabel = styled.label`
  width: 20%;
  min-width: 60px;
  display: inline-block;
`;
export const LoginPasswordInput = styled.input`
  border-radius: 5px;
  height: 43px;
  width: calc(80% - 10px);
  margin-top: -5px;
  background-color: inherit;
  border: 1px solid #ddd;
`;
//로그인 버튼
export const LoginBtn = styled.button`
  background: #ffdb7e;
  transition: 1s;
  border: 1px solid #ffdb7e;
  color: #846e23;
  width: 100%;
  max-width: 300px;
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
  max-width: 300px;
  padding: 15px;
  border-radius: 500px;
  margin-top: 10px;
`;
