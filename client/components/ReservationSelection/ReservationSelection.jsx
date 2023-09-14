import React from 'react';
import styled from 'styled-components';
import CommonStyles from '../../utils/CommonStyles';

function ReservationSelection() {
  <>
    <ReservationInner>
      <ReservationTabUl>
        <ReservationStepLi>
          <ReservationA>일자선택</ReservationA>
        </ReservationStepLi>
        <ReservationStep2Li>
          <ReservationA>메뉴선택</ReservationA>
        </ReservationStep2Li>
      </ReservationTabUl>
    </ReservationInner>
  </>;
}

export default ReservationSelection;

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
