import React, { useEffect, useState } from 'react';
import CommonStyles from '../../utils/CommonStyles';
import styled from 'styled-components';
import NickName from '../../components/Mypage/NickName';
import OrderList from '../../components/Mypage/OrderList';
import axios from 'axios';
function Mypage() {
  const [cartInfor, setCartInfor] = useState(null);

  const fetchCartData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getPaidCart');
      setCartInfor(response.data.cartdata);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/getPaidCart')
  //     .then((response) => {
  //       setCartInfor(response.data.cartdata);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // console.log(cartInfor);

  // useEffect 함수의 두 번째 인자로 빈 배열을 넣으면, 해당 컴포넌트가 처음 마운트 될 때 useEffect안의 코드를 한번만 실행
  // 여기서 fetchCartData 함수는 컴포넌트가 처음 마운트 될 때 한 번만 호출됨
  // 하지만 fetchCartData 함수는 orderList 컴포넌트에서 주문 취소 버튼이 클릭될 때마다 호출되기 때문에 실제로는 주문이 취소할때마다 장바구니 정보를 갱신한다.
  // useEffct 함수는 컴포넌트가 처음 마운트 될 때 한번만 fetchCartData 함수를 호출하고 주문이 취소 버튼이 클릭될 때마다 fetchCartData 함수가 호출되어 장바구니 정보를 갱신

  useEffect(() => {
    fetchCartData();
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
            {/*주문내역 컴포넌트 */}
            {cartInfor &&
              cartInfor.map((cart) => {
                return (
                  <OrderList
                    key={cart.id}
                    cart={cart}
                    fetchCartData={fetchCartData}
                  />
                );
              })}
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
