import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
function NickName() {
  const [nickName, setNickName] = useState(''); // 초기 상태를 빈 문자열로 설정

  axios.defaults.withCredentials = true;
  // 서버 응답 추가 코드문
  useEffect(() => {
    axios
      .get('http://localhost:5000/header')
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setNickName(res.data.name); // 응답에서 이름을 가져와 상태를 업데이트
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ReservationBox>
      <ReservationDate>
        <ReservationTitle>닉네임</ReservationTitle>
        <ReservationNickName>{nickName}님</ReservationNickName>
        <ChangeDTBtn>변경</ChangeDTBtn>
      </ReservationDate>
    </ReservationBox>
  );
}

export default NickName;
export const ReservationDate = styled.div`
  border: 1px solid #ffdb7e;
  width: 100%;
  /* padding: 15px;
  border-radius: 500px; */
  border-radius: 100px;
  height: 45px;
  padding: 8px 20px;
`;
export const ReservationBox = styled.div`
  padding: 15px 10px;
  border-bottom: 2px solid #ebebeb;
`;
export const ReservationTitle = styled.h3`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
`;
export const ReservationNickName = styled.h3`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
`;
export const ChangeDTBtn = styled.button`
  margin-left: 20px;
  background: #ffa0c5;
  color: white;
  width: 100%;
  max-width: 60px;
  padding: 5px 0px;
  border-radius: 50px;
`;
