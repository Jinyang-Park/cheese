import { emailRegex, passwordRegex } from './util';

function LoginValidation(values) {
  let error = {};

  if (values.email === '') {
    error.email = '사용자 아이디를 입력해주세요.';
  } else if (!emailRegex.test(values.email)) {
    error.email = '이메일 형식을 올바르게 입력해주세요';
  } else {
    error.email = '';
  }

  if (values.password === '') {
    error.password = '비밀번호를 정확히 입력해주세요';
  } else if (!passwordRegex.test(values.password)) {
    error.password =
      '비밀번호는 대소문자, 특수문자를 포함하여 8자리 이상이어야 합니다.';
  } else {
    error.password = '';
  }
  return error;
}
export default LoginValidation;
