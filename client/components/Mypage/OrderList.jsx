import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

function OrderList({ cart, fetchCartData }) {
  const handleOrederCancelClick = async (itemId) => {
    console.log(itemId);
    try {
      const response = await axios.delete(
        `http://localhost:5000/delete/${itemId}`
      );
      if (response.status === 200) {
        window.confirm('주문을 취소하시겠습니까?');
        {
          // 클릭한 상품이 삭제되면 fetchCartData 함수를 불러 새로 페이지를 생성한다
          fetchCartData();
        }
      }
    } catch (error) {
      console.log('Failed to cancel the order', error);
    }
  };
  return (
    <>
      {cart.cart_data.cart.map((item) => (
        <CartItemUl key={item.id}>
          <CartItemImg src={item.image} />
          <CartItemWrap>
            <CartItemliTitle>{item.Koname}</CartItemliTitle>
            <CartItemLeftli>{item.layer.Layer}</CartItemLeftli>
            <CartItemLeftli>/</CartItemLeftli>
            <CartItemLeftli>{item.tastes.join(', ')}</CartItemLeftli>
          </CartItemWrap>
          <CartItemRightWrap>
            <CartDateLi>예약 날짜</CartDateLi>
            <CartOrderDate>{cart.cart_data.cartDT.formattedDate}</CartOrderDate>
            <CartOrderDate>{cart.cart_data.cartDT.time.time}</CartOrderDate>
            <CartItemliTitle2>{item.quantity}개</CartItemliTitle2>
          </CartItemRightWrap>
          <CartItemMiddleWrap>
            <CartItemli>{item.total.toLocaleString()}원</CartItemli>
            <OrderListBtn onClick={() => handleOrederCancelClick(cart.id)}>
              주문 취소하기
            </OrderListBtn>
          </CartItemMiddleWrap>
        </CartItemUl>
      ))}
    </>
  );
}

export default OrderList;
export const CartItemUl = styled.ul`
  align-items: center;
  position: relative;
  border-bottom: 2px solid #ebebeb;
  padding: 5px 25px;
  line-height: 26px;
  display: flex;
  justify-content: space-between;
`;
export const CartItemImg = styled.img`
  padding: 8px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
export const CartItemWrap = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
`;
export const CartItemliTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
`;
export const CartItemliTitle2 = styled.h3`
  margin-left: 70px;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
`;
export const CartDateLi = styled.h3`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
`;
export const CartItemLeftli = styled.h3`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  color: #a2a1a1;
`;
export const CartOrderDate = styled.h3`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  color: #a2a1a1;
`;
export const CartItemRightWrap = styled.div`
  display: flex;
`;
export const CartItemInput = styled.input`
  margin: 0 5px;
  text-align: center;
  line-height: 20px;
  font-size: 1rem;
  width: 30px;
  background-color: transparent;
`;
export const CartItemMiddleWrap = styled.div`
  /* width: 8%; */
  display: flex;
  align-items: center;
  /* margin-right: -200px; */
`;
export const CartItemli = styled.h3`
  margin-left: 30px;
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
`;
export const OrderListBtn = styled.button`
  margin-left: 30px;
  background: #ffa0c5;
  color: white;
  /* width: 100%; */
  max-width: 100px;
  padding: 8px;
  border-radius: 50px;
`;
