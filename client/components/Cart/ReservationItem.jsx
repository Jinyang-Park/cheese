import React from 'react';
import styled from 'styled-components';
function ReservationItem({ item }) {
  return (
    <CartItemUl>
      <CartItemli>{item.name}</CartItemli>
    </CartItemUl>
  );
}

export default ReservationItem;

export const CartItemUl = styled.ul``;
export const CartItemli = styled.li`
  position: relative;
  border-top: 1px solid #ebebeb;
  padding: 15px 0;
  line-height: 26px;
  display: flex;
`;
