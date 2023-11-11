import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommonStyles from '../../utils/CommonStyles';
import ReservationSetDT from '../../components/Cart/ReservationSetDT';
import { useSelector } from 'react-redux';
import ReservationItem from '../../components/Cart/ReservationItem';

function ShoppingCart() {
  // initialState의 cart 배열에 넣어준다.
  // 배열로 들어가서 map을 통과할 수 있다.
  const { cart } = useSelector((state) => state.ReservationsCakeDetail);
  console.log(cart);
  return (
    <>
      <CommonStyles>
        <ReservationWrap>
          <ReservationTitle>장바구니</ReservationTitle>
        </ReservationWrap>
        <ReservationInner>
          {/* 오더 탭 */}
          <ReservationTabUl>
            <ReservationStepLi>
              <ReservationA>예약</ReservationA>
            </ReservationStepLi>
          </ReservationTabUl>
          <ReservationDateWrap>
            <ReservationSetDT />
            {cart.map((item) => {
              return <ReservationItem key={item.id} item={item} />;
            })}
          </ReservationDateWrap>
        </ReservationInner>
      </CommonStyles>
    </>
  );
}

export default ShoppingCart;
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
  grid-template-columns: repeat(1, 1fr);
  -moz-column-gap: 0;
  column-gap: 0;
`;
export const ReservationStepLi = styled.li`
  border-radius: 10px 10px 0 0;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background-color: #f1e4ab;
  border-bottom: 5px solid #f1e4ab;
  color: #000;
  font-weight: 500;
`;
export const ReservationA = styled.a``;
export const CakedetailInner = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 400px 1fr;
  -moz-column-gap: 40px;
  column-gap: 40px;
`;
export const ReservationDateWrap = styled.div`
  border: 3px solid #f1e4ab;
  border-width: 0 3px 3px 3px;
`;
