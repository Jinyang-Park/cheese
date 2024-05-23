import React, { useEffect, useState } from 'react';
import CommonStyles from '../../utils/CommonStyles';
import styled from 'styled-components';
import NickName from '../../components/Mypage/NickName';
import axios from 'axios';
import OrderListGroup from '../../components/Mypage/OrderListGroup';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function Mypage() {
  const [cartInfor, setCartInfor] = useState(null);
  console.log('cartInfor', cartInfor);

  const fetchCartData = async () => {
    try {
      const response = await axios.get(
        'http://atelier-de-cheesebon.com/cart/getPaidCart'
      );
      setCartInfor(response.data.cartdata);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect 함수의 두 번째 인자로 빈 배열을 넣으면, 해당 컴포넌트가 처음 마운트 될 때 useEffect안의 코드를 한번만 실행
  // 여기서 fetchCartData 함수는 컴포넌트가 처음 마운트 될 때 한 번만 호출됨
  // 하지만 fetchCartData 함수는 orderList 컴포넌트에서 주문 취소 버튼이 클릭될 때마다 호출되기 때문에 실제로는 주문이 취소할때마다 장바구니 정보를 갱신한다.
  // useEffct 함수는 컴포넌트가 처음 마운트 될 때 한번만 fetchCartData 함수를 호출하고 주문이 취소 버튼이 클릭될 때마다 fetchCartData 함수가 호출되어 장바구니 정보를 갱신

  useEffect(() => {
    fetchCartData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CommonStyles>
        <ReservationWrap>
          <ReservationTitle>마이페이지</ReservationTitle>
        </ReservationWrap>
        <ReservationInner>
          {/* 오더 탭 */}
          <ReservationTabUl>
            <ReservationStepLi>
              <ReservationA>주문정보</ReservationA>
            </ReservationStepLi>
          </ReservationTabUl>
          <ReservationDateWrap>
            {/*닉네임 변경 컴포넌트 */}
            <NickName />
            {/*&& 그리고라는 논리 연산자이다. 이 연산자는 두 가지 조건이 모두 참일때 참을 반환한다.
            cartInfor가 null이 아니고, 그리고 cartInfor의 길이가 0일 때"를 의미 */}
            {cartInfor && cartInfor.length === 0 ? (
              <CartemptyWrap>
                <CartemptyIcon />
                <Cartemptytxt>주문하신 상품이 없습니다.</Cartemptytxt>
              </CartemptyWrap>
            ) : (
              cartInfor &&
              cartInfor.map((items) => (
                <OrderListGroup
                  key={items.id}
                  items={items}
                  fetchCartData={fetchCartData}
                />
              ))
            )}
          </ReservationDateWrap>
        </ReservationInner>
      </CommonStyles>
    </>
  );
}

export default Mypage;
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
  margin-bottom: 120px;
  @media screen and (max-width: 1400px) {
    width: 90%;
  }
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
export const CartemptyWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
`;
export const Cartemptytxt = styled.h3`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  margin-bottom: 30px;
`;
export const CartemptyIcon = styled(AiOutlineShoppingCart)`
  width: 70px;
  height: 70px;
  color: #8b8b8b;
`;
