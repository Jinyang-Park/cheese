import React, { useEffect } from 'react';
import styled from 'styled-components';
import OrderList from './OrderList';

import axios from 'axios';

function OrderListGroup({ items, fetchCartData }) {
  // useEffect 함수의 두 번째 인자로 빈 배열을 넣으면, 해당 컴포넌트가 처음 마운트 될 때 useEffect안의 코드를 한번만 실행
  // 여기서 fetchCartData 함수는 컴포넌트가 처음 마운트 될 때 한 번만 호출됨
  // 하지만 fetchCartData 함수는 orderList 컴포넌트에서 주문 취소 버튼이 클릭될 때마다 호출되기 때문에 실제로는 주문이 취소할때마다 장바구니 정보를 갱신한다.
  // useEffct 함수는 컴포넌트가 처음 마운트 될 때 한번만 fetchCartData 함수를 호출하고 주문이 취소 버튼이 클릭될 때마다 fetchCartData 함수가 호출되어 장바구니 정보를 갱신

  const handleOrederCancelClick = async (itemId) => {
    console.log(itemId);
    const isConfirmed = window.confirm('주문을 취소하시겠습니까?');
    if (!isConfirmed) {
      return; // 사용자가 '취소'를 누르면 여기서 함수를 종료합니다.
    }
    try {
      const response = await axios.delete(
        `http://atelier-de-cheesebon.com/cart/delete/${itemId}`
      );
      if (response.status === 200) {
        // 클릭한 상품이 삭제되면 fetchCartData 함수를 불러 새로 페이지를 생성한다
        fetchCartData();

        // 결제 날짜와 시간 삭제 api 호출
        axios
          .delete(
            `http://atelier-de-cheesebon.com/cart/deleteDateTime/${itemId}`
          )
          .then((response) => {
            if (response.status !== 200) {
              console.log('Failed to delete the date and time');
            }
          })
          .catch((error) => {
            console.log('Failed to delete the date and time', error);
          });
      }
    } catch (error) {
      console.log('Failed to cancel the order', error);
    }
  };

  return (
    <>
      <OrderListDTDiv>
        <OrderListDate>{items.cart_data.cartDT.formattedDate}</OrderListDate>
        <OrderListTime>{items.cart_data.cartDT.time.time}</OrderListTime>
      </OrderListDTDiv>
      <OrderListDTWrap>
        {/*주문내역 컴포넌트 
            && 모두가 참일때 참을 반환
            cartInfor null아니고 length === 0일때 즉 길이가 0일때 주문하신 상품이 없다는거를 띄워줘라
          */}

        {/* {items.cart_data.cart && items.cart_data.cart.length === 0 ? (
          <CartemptyWrap>
            <CartemptyIcon />
            <Cartemptytxt>주문하신 상품이 없습니다.</Cartemptytxt>
          </CartemptyWrap>
        ) : ( */}
        {items.cart_data.cart &&
          items.cart_data.cart.map((cart) => {
            return (
              <>
                <OrderList key={cart.id} cart={cart} />
              </>
            );
          })}

        <OrerListBtnWrap>
          <OrderListBtn onClick={() => handleOrederCancelClick(items.id)}>
            주문 취소하기
          </OrderListBtn>
        </OrerListBtnWrap>
      </OrderListDTWrap>
    </>
  );
}

export default OrderListGroup;
// export const CartemptyWrap = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   justify-content: center;
//   padding-top: 40px;
// `;
// export const Cartemptytxt = styled.h3`
//   margin-top: 20px;
//   font-size: 16px;
//   font-weight: 400;
//   display: inline-block;
// `;
// export const CartemptyIcon = styled(AiOutlineShoppingCart)`
//   width: 70px;
//   height: 70px;
//   color: #8b8b8b;
// `;
export const OrderListBtn = styled.button`
  background: #ffa0c5;
  color: white;
  padding: 12px 18px;
  border-radius: 50px;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
export const OrderListDTWrap = styled.div`
  border-radius: 20px;
  border: 1px solid #ffdb7e;
  background-color: #fdfbf7;
  margin: 15px 10px;
`;
export const OrderListDate = styled.h3`
  margin-left: 10px;
  font-size: 18px;
  font-weight: 600;
  display: inline-block;
`;
export const OrderListTime = styled.h3`
  margin-left: 10px;
  font-size: 18px;
  font-weight: 600;
  display: inline-block;
`;
export const OrderListDTDiv = styled.div`
  display: flex;
  padding: 10px 25px;
`;
export const OrerListBtnWrap = styled.div`
  display: flex;
  padding: 20px;
  justify-content: flex-end;
`;
