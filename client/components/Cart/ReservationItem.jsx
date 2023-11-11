import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/modules/ReservationsCakeDetail';
function ReservationItem({ item }) {
  console.log('아이템', item);

  const dispatch = useDispatch();

  // 케익 디테일 상태를 가져오는 로직
  const { quantity, price } = useSelector(
    (state) => state.ReservationsCakeDetail
  );

  return (
    <CartItemUl>
      <CartItemWrap>
        <CartItemImg src={item.image} />
        <CartItemliTitle>{item.Koname}</CartItemliTitle>
        <CartItemLeftli>{item.layer.Layer}</CartItemLeftli>
        <CartItemLeftli>/</CartItemLeftli>
        <CartItemLeftli>{item.tastes.join(', ')}</CartItemLeftli>
      </CartItemWrap>
      <CartItemRightWrap>
        <TotallMinusIcon />
        <CartItemInput value={item.quantity} />
        {/* {item.quantity} */}
        <TotallPlusBtnIcon />
      </CartItemRightWrap>
      <CartItemMiddleWrap>
        <CartItemli>{item.price.toLocaleString()}원</CartItemli>
      </CartItemMiddleWrap>
      <CancelIcon onClick={() => dispatch(removeFromCart(item.id))} />
    </CartItemUl>
  );
}

export default ReservationItem;

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
  width: 55%;
  display: flex;
  align-items: center;
`;
export const CartItemRightWrap = styled.div`
  display: flex;
`;
export const CartItemMiddleWrap = styled.div`
  width: 8%;
  display: flex;
  align-items: center;
  margin-right: -200px;
`;
export const CartItemliTitle = styled.h3`
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
export const CartItemInput = styled.input`
  margin: 0 5px;
  text-align: center;
  line-height: 20px;
  font-size: 1rem;
  width: 30px;
  background-color: transparent;
`;
export const CartItemli = styled.h3`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
`;
export const TotallPlusBtnIcon = styled(AiOutlinePlusCircle)`
  border-radius: 100px;
  width: 20px;
  height: 20px;
  position: relative;
  font-size: 0;
  display: inline-block;
`;
export const TotallMinusIcon = styled(AiOutlineMinusCircle)`
  border-radius: 100px;
  width: 20px;
  height: 20px;
  position: relative;
  font-size: 0;
  display: inline-block;

  // props로 style 주는 방법
  opacity: ${(props) => (props.disabled ? '0.3;' : '')};
`;
export const CancelIcon = styled(FiX)`
  width: 20px;
  height: 20px;
  margin-left: 20px;
  color: #a2a1a1;
  cursor: pointer;
`;
