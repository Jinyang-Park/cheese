import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonStyles from './../../utils/CommonStyles';
import styled from 'styled-components';
import Butterfly from '../../public/assets/Butterfly.png';
import Home from '../../public/assets/Home2.png';
import checkLogin from './../../hooks/useCheckLogin';

function Reservation() {
  const checkLoggedIn = checkLogin();
  const navigate = useNavigate();

  //router.js:311  You should call navigate() in a React.useEffect(), not when your component is first rendered. 이 에러가 떠서 useEffect에 일단 넣음

  const goToLogin = () => {
    alert('로그인 후 서비스를 이용해 주세요');
    navigate('/Login');
  };
  // useEffect(() => {
  //   // checkLogin 훅에서 loggedIn true이면 유저 네임
  //   if (checkLoggedIn.loggedIn) {
  //     console.log(checkLoggedIn.name);
  //   } else {
  //     console.log('Not logged in');
  //     navigate('/Login');
  //   }
  // }, []);

  return (
    <CommonStyles>
      <ReservationWrap>
        <ReservationTitle>예약</ReservationTitle>
      </ReservationWrap>
      <ReservationSection>
        <ReservationUl>
          {/*웨딩 케이크 */}
          <ReserveWeddingLi>
            <ReservationImg src={Butterfly} />

            {/*비 로그인 시 버튼 클릭 후 로그인 이동*/}
            {!checkLoggedIn.loggedIn ? (
              <ReWeddingBtn type='button' onClick={goToLogin}>
                웨딩 케이크 상담 예약
              </ReWeddingBtn>
            ) : (
              <ReWeddingBtn type='button'>웨딩 케이크 상담 예약</ReWeddingBtn>
            )}
            <ReWeddingP>
              웨딩 케이크는 상담을 통해
              <br />
              예약을 진행합니다
            </ReWeddingP>
            <ReWeddingModalBtn>웨딩 케이크 상담 예약이란?</ReWeddingModalBtn>
          </ReserveWeddingLi>

          {/* 케이크 */}
          <ReserveWeddingLi>
            <ReservationImg2 src={Home} />

            {/*비 로그인 시 버튼 클릭 후 로그인 이동*/}
            {!checkLoggedIn.loggedIn ? (
              <ReWeddingBtn type='button' onClick={goToLogin}>
                케이크 예약
              </ReWeddingBtn>
            ) : (
              <ReWeddingBtn type='button'>케이크 예약</ReWeddingBtn>
            )}
            <ReWeddingP>
              일반 케이크는 상담 없이
              <br />
              온라인 예약으로 진행합니다
            </ReWeddingP>
            <ReWeddingModalBtn>케이크 예약이란?</ReWeddingModalBtn>
          </ReserveWeddingLi>
        </ReservationUl>
      </ReservationSection>
    </CommonStyles>
  );
}

export default Reservation;

export const ReservationWrap = styled.div`
  position: relative;
`;
export const ReservationTitle = styled.h1`
  padding-top: 200px;
  margin: 0 0 100px;
  text-align: center;
  font-size: 1.75em;
  font-weight: 500;
  letter-spacing: 0;
`;
export const ReservationSection = styled.div`
  text-align: center;
  max-width: 960px;
  margin: 0 auto;
`;
export const ReservationUl = styled.ul`
  font-size: 0;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
`;
export const ReserveWeddingLi = styled.li`
  width: 50%;
`;
export const ReservationImg = styled.img`
  width: 130px;
  height: 154px;
  object-fit: contain;
  margin: 0 auto;
`;
export const ReservationImg2 = styled.img`
  width: 150px;
  height: 154px;
  object-fit: contain;
  margin: 0 auto;
`;
export const ReWeddingH2 = styled.h2``;
export const ReWeddingBtn = styled.button`
  color: #ffa0c5;
  border: 1px solid #ffa0c5;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 100px;
  background-color: transparent;
  margin-top: 20px;
  &::after {
    content: '(클릭!)';
    margin-left: 5px;
  }
`;
export const ReWeddingP = styled.p`
  line-height: 22px;
  font-size: 1rem;
  margin-top: 20px;
`;
export const ReWeddingP2 = styled.p``;
export const ReWeddingModalBtn = styled.button`
  color: #999;
  font-weight: 400;
  margin-top: 10px;
  font-size: 1rem;
  text-decoration: underline;
  background-color: transparent;
  margin-top: 10px;
`;
