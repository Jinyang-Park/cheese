import React from 'react';
import styled from 'styled-components';
import CommonStyles from '../../utils/CommonStyles';
import ReservationSetDT from '../../components/Cart/ReservationSetDT';
import { useSelector } from 'react-redux';
import ReservationItem from '../../components/Cart/ReservationItem';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ShoppingCart() {
  // initialState의 cart 배열에 넣어준다.
  // 배열로 들어가서 map을 통과할 수 있다.
  const { cart } = useSelector((state) => state.ReservationsCakeDetail);
  console.log(cart);

  // 1. reduce가 처음 실행될 때, sum은 0(초기값)이고, item은 cart 배열의 첫번째 요소입니다.
  // 2. 리듀서 함수가 실행되면서 sum + item.total의 값이 계산되고, 이 값이 다음 누산기 값으로 업데이트됩니다.
  // 3.이후 reduce는 배열의 다음 요소에 대해 같은 작업을 수행하고, 이 과정을 배열의 모든 요소를 처리할 때까지 반복합니다.
  // 4.모든 요소를 처리한 후 reduce는 최종 누산기 값을 반환합니다. 이 경우에는 sum이며, 이 값은 cart 배열의 모든 item.total의 합계입니다.
  // 5.따라서 reduce를 사용하면 배열의 모든 요소를 하나의 값으로 결합할 수 있습니다. 이 예제에서는 장바구니의 모든 아이템 가격을 합산하는데 사용되었습니다.
  const totalCost = cart.reduce((sum, item) => sum + item.total, 0);

  // navaigate
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handlePaymentClick = () => {
    axios
      .post('http://localhost:5000/cart', cart)
      .then((response) => {
        if (response.status === 200) {
          window.confirm('결제를 하시겠습니까?');
        }
        console.log(response.data);
        // 마이페이지로 이동 시키키 추가하기
        navigate(`/`);
      })
      .catch((error) => console.error(error));
  };
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
            <CartTotalWrap>
              <CartTotalPriceTitle>합계금액</CartTotalPriceTitle>
              <CartTotalPrice>{totalCost.toLocaleString()}원</CartTotalPrice>
            </CartTotalWrap>
            <CartItemBtnWrap>
              <CartItemAddToProuductBtn
                onClick={() => {
                  navigate(`/Reservation/date/menupick/`);
                }}
              >
                예약상품추가
              </CartItemAddToProuductBtn>
              <CartItemOrderBtn onClick={handlePaymentClick}>
                결제하기
              </CartItemOrderBtn>
            </CartItemBtnWrap>
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
export const CartItemBtnWrap = styled.div`
  text-align: center;
  margin: 50px auto 20px;
`;
export const CartItemAddToProuductBtn = styled.button`
  background: #ebebeb;
  border: 1px solid #ebebeb;
  color: #846e23;
  width: 100%;
  max-width: 240px;
  padding: 15px;
  margin: 3px 1px;
  border-radius: 500px;
  font-size: 1em;
`;
export const CartItemOrderBtn = styled.button`
  background: #ffdb7e;
  border: 1px solid #ffdb7e;
  color: #846e23;
  width: 100%;
  max-width: 240px;
  padding: 15px;
  margin: 3px 1px;
  border-radius: 500px;
  font-size: 1em;
`;
export const CartTotalWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 25px;
  margin-top: 10px;
`;
export const CartTotalPriceTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
`;
export const CartTotalPrice = styled.h3`
  margin-left: 10px;
  font-size: 18px;
  font-weight: 600;
  display: inline-block;
`;
