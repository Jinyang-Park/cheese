import { useRef, useState } from 'react';
import { emailRegex, passwordRegex } from '../common/util';

const useAuth = (values) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  // const [values, setValues] = useState({
  //   email: '',
  //   password: '',
  // });

  // 이메일 입력하는 함수
  const changeEmail = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  // 비밀번호 입력받는 함수
  const changePassword = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  // 비밀번호 다시 입력하는 함수
  const changeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  // valuse.email === '' / !checkEmailValidation.test(values.email)
  // 이메일, 비밀번호 유효성 검사하는 함수
  const checkValidation = (values) => {
    const checkEmailValidation = email.match(emailRegex);
    const checkPasswordValidation = password.match(passwordRegex);
    if (!values.email || !checkEmailValidation) {
      if (!values.email) {
        alert('이메일을 입력해주세요.');
        emailRef?.current?.focus();
        return false;
      } else {
        alert('이메일 형식을 올바르게 입력해주세요');
        emailRef?.current?.focus();
        return false;
      }
    }

    if (!values.password || !checkPasswordValidation) {
      if (!values.password) {
        alert('비밀번호를 입력해주세요');
        passwordRef?.current?.focus();
        return false;
      } else {
        alert(
          '비밀번호는 대소문자, 특수문자를 포함하여 8자리 이상이어야 합니다.'
        );
        passwordRef?.current?.focus();
        setPassword('');
        return false;
      }
    }
    return true;
  };

  // 비밀번호 일치여부 확인하는 함수
  const checkValidationForSignUp = (values) => {
    if (!values.confirmPassword) {
      alert('비밀번호를 다시 한번 더 입력해주세요.');
      return false;
    }
    if (values.password !== values.confirmPassword) {
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
    emailRef,
    passwordRef,
    confirmPasswordRef,
    changeEmail,
    changePassword,
    changeConfirmPassword,
    checkValidation,
    checkValidationForSignUp,
  };
};

export default useAuth;
