import React from 'react';
import styled from 'styled-components';
function ReservationItem({ item }) {
  console.log('아이템', item);

  return (
    <CartItemUl>
      <CartItemWrap>
        <CartItemImg src={item.image} />
        <CartItemli>{item.Koname}</CartItemli>
        <CartItemli>/ {item.layer.Layer}</CartItemli>
        <CartItemli>/ {item.tastes.join(', ')}</CartItemli>
      </CartItemWrap>
      <CartItemWrap>
        <CartItemli>{item.price}</CartItemli>
        <CartItemli>{item.quantity}</CartItemli>
      </CartItemWrap>
    </CartItemUl>
  );
}

export default ReservationItem;

export const CartItemUl = styled.ul`
  display: flex;
  align-items: center;
  position: relative;
  border-top: 1px solid #ebebeb;
  padding: 5px;
  line-height: 26px;
  display: flex;
  justify-content: space-between;
`;
export const CartItemImg = styled.img`
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
export const CartItemWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const CartItemli = styled.li`
  display: inline-block;
  margin-left: 10px;
`;
