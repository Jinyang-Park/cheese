import React, { useState } from 'react';
import styled from 'styled-components';
import CommonStyles from '../../utils/CommonStyles';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

function Signup() {
  const auth = useAuth();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    // 이메일, 비밀번호 유효성 검사 확인
    if (!auth.checkValidation()) return;

    // 비밀번호 일치여부 확인
    if (!auth.checkValidationForSignUp()) return;

    axios
      .post('http://localhost:5000/signup', {
        Email: auth.email,
        UserName: auth.userName,
        Password: auth.password,
      })
      .then(() => {
        navigate('/Login');
        // console.log('user!!');
      });
  };
  return (
    <CommonStyles>
      <LoginWrap>
        <LoginTitle>회원가입</LoginTitle>
        <LoginForm>
          <LoginNameDiv>
            <LoginNameLabel htmlFor='Name'>이름</LoginNameLabel>
            <LoginNameInput
              type='Name'
              name='name'
              placeholder='이름을 입력해주세요.'
              onChange={auth.changeName}
            />
          </LoginNameDiv>

          <LoginEmailDiv>
            <LoginEmailLabel htmlFor='email'>이메일</LoginEmailLabel>
            <LoginEmailInput
              type='email'
              name='email'
              placeholder='이메일을 입력해주세요.'
              onChange={auth.changeEmail}
            />
            {/* {errors.email && <ErrorSpan>{errors.email}</ErrorSpan>} */}
          </LoginEmailDiv>

          <LoginPasswordDiv>
            <LoginPasswordLabel htmlFor='password'>비밀번호</LoginPasswordLabel>
            <LoginPasswordInput
              type='password'
              name='password'
              placeholder='비밀번호를 입력해주세요.'
              onChange={auth.changePassword}
            />
            {/* {errors.password && <ErrorSpan>{errors.password}</ErrorSpan>} */}
          </LoginPasswordDiv>

          <LoginPasswordDiv>
            <LoginPasswordLabel htmlFor='confirmpassword'>
              비밀번호 확인
            </LoginPasswordLabel>
            <LoginPasswordInput
              type='password'
              name='confirmpassword'
              placeholder='비밀번호를 다시 한 번 입력해주세요.'
              onChange={auth.changeConfirmPassword}
            />
          </LoginPasswordDiv>
          <LoginBtn onClick={submitHandler}>가입하기</LoginBtn>
          <Link to={'/'}>
            <RegisterBtn>로그인</RegisterBtn>
          </Link>
        </LoginForm>
      </LoginWrap>
    </CommonStyles>
  );
}

export default Signup;
export const LoginWrap = styled.div`
  padding-top: 200px;
  /* margin: 0 0 100px; */
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
// 이름
export const LoginNameDiv = styled.div`
  line-height: 45px;
  text-align: left;
  border-bottom: 1px solid #eee;
  padding: 15px 0;
`;
export const LoginNameLabel = styled.label`
  width: 25%;
  min-width: 60px;
  display: inline-block;
`;
export const LoginNameInput = styled.input`
  border-radius: 5px;
  height: 43px;
  /* width: calc(80% - 10px); */
  width: 100%;
  margin-top: -5px;
  background-color: inherit;
  border: 1px solid #ddd;
  padding-left: 5px;
`;

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
  width: 100%;
  /* width: calc(80% - 10px); */
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
