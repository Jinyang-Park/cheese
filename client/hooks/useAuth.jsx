import { useRef, useState } from 'react';
import { emailRegex, passwordRegex, nameRegex } from '../common/util';

const useAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userName, setUserName] = useState('');
  // const emailRef = useRef(null);
  // const passwordRef = useRef(null);
  // const confirmPasswordRef = useRef(null);

  // 이메일 입력받는 함수
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  // 비밀번호 입력받는 함수
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  // 비밀번호 다시 입력하는 함수
  const changeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  // 이름 입력받는 함수
  const changeName = (event) => {
    setUserName(event.target.value);
  };

  // 이름 유효성 검사 함수
  const checkNameValidation = () => {
    const checkNameValidation = userName.match(nameRegex);

    // 이름
    if (!userName || !checkNameValidation) {
      if (!userName) {
        alert('이름을 입력해주세요.');
        return false;
      } else {
        alert('한글 3글자 이상 입력해 주세요.');
        return false;
      }
    }
  };

  // 이메일, 비밀번호 유효성 검사하는 함수
  const checkValidation = () => {
    const checkEmailValidation = email.match(emailRegex);
    const checkPasswordValidation = password.match(passwordRegex);

    // 이메일
    if (!email || !checkEmailValidation) {
      if (!email) {
        alert('이메일을 입력해주세요.');
        // emailRef?.current?.focus();
        return false;
      } else {
        alert('이메일 형식을 올바르게 입력해주세요');
        // emailRef?.current?.focus();
        return false;
      }
    }

    // 비밀번호
    if (!password || !checkPasswordValidation) {
      if (!password) {
        alert('비밀번호를 입력해주세요');
        // passwordRef?.current?.focus();
        return false;
      } else {
        alert(
          '비밀번호는 대소문자, 특수문자를 포함하여 8자리 이상이어야 합니다.'
        );
        // passwordRef?.current?.focus();
        setPassword('');
        return false;
      }
    }
    return true;
  };

  // 비밀번호 일치여부 확인하는 함수
  const checkValidationForSignUp = () => {
    if (!confirmPassword) {
      alert('비밀번호를 다시 한번 더 입력해주세요.');
      return false;
    }
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      setConfirmPassword('');
      return false;
    }
    return true;
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    userName,
    setUserName,
    changeName,
    // emailRef,
    // passwordRef,
    // confirmPasswordRef,
    changeEmail,
    changePassword,
    changeConfirmPassword,
    checkValidation,
    checkValidationForSignUp,
    checkNameValidation,
  };
};

export default useAuth;
