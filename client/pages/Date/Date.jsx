import React from 'react';
import CommonStyles from '../../utils/CommonStyles';
import styled from 'styled-components';
import ReservationCalendar from '../../components/Date/ReservationCalendar ';

function Date() {
  return (
    <CommonStyles>
      <ReservationWrap>
        <ReservationTitle>예약</ReservationTitle>
      </ReservationWrap>
      <ReservationInner>
        {/* 오더 탭 */}
        <ReservationTabUl>
          <ReservationStepLi>
            <ReservationA>일자선택</ReservationA>
          </ReservationStepLi>
          <ReservationStep2Li>
            <ReservationA>메뉴선택</ReservationA>
          </ReservationStep2Li>
        </ReservationTabUl>
        {/* 예약 날짜, 시간 */}
        <ReservationDateWrap>
          <ReservationDate>
            <ReservationCalendar />
          </ReservationDate>
        </ReservationDateWrap>
        {/* 예약  버튼*/}
      </ReservationInner>
    </CommonStyles>
  );
}

export default Date;

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
export const ReservationInner = styled.div`
  width: 1366px;
  margin: 0 auto;
  position: relative;
`;
export const ReservationTabUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  -moz-column-gap: 0;
  column-gap: 0;
`;
export const ReservationStepLi = styled.li`
  border-radius: 10px 0 0 0;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background-color: #f1e4ab;
  border-bottom: 5px solid #f1e4ab;
  color: #000;
  font-weight: 500;
  &::before {
    content: 'STEP01';
    margin-right: 5px;
    font-weight: 300;
    font-size: 13px;
  }
`;
export const ReservationStep2Li = styled.li`
  background-color: #000;
  border-bottom: 5px solid #f1e4ab;
  text-align: center;
  height: 44px;
  line-height: 44px;
  color: #fff;
  border-radius: 0 10px 0 0;
  &::before {
    content: 'STEP02';
    margin-right: 5px;
    font-weight: 300;
    font-size: 13px;
  }
`;
export const ReservationA = styled.a``;
export const ReservationDateWrap = styled.div`
  border: 3px solid #f1e4ab;
  border-width: 0 3px 3px 3px;
`;
export const ReservationDate = styled.div`
  width: 700px;
  float: left;
  padding: 20px;
`;
