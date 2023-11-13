import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  setPrice,
  setQuantity,
} from '../../redux/modules/ReservationsCakeDetail';
function ReservationItem({ item }) {
  console.log('아이템', item);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrice(item.price * quantity));
  }, [item, quantity]);

  // 케익 디테일 상태를 가져오는 로직
  const { quantity, price } = useSelector(
    (state) => state.ReservationsCakeDetail
  );
  // + 버튼을 눌렀을 때
  const IncreseCartQuantity = () => {
    if (quantity >= 5) {
      alert(`5개 이상의 케이크 예약은 상담을 통해 진행합니다.`);
    } else {
      // 수량을 증가시키고 가격을 업데이트 한다.
      dispatch(increaseQuantity(item.id, quantity + 1));
    }
  };
  // - 버튼을 눌렀을 때
  const DecreaseCartQuantity = () => {
    if (quantity > 1) {
      // 수량을 감소시키고 가격을 업데이트 한다.
      dispatch(decreaseQuantity(item.id, quantity - 1));
    }
  };

  // input 수량 함수 로직
  const handleCartChangeQuantityInput = (e) => {
    let newValue = parseInt(e.target.value);

    if (isNaN(newValue)) {
      newValue = '';
    } else if (newValue === 0) {
      return false;
    }

    if (newValue > 5) {
      alert(`5개 이상의 케이크 예약은 상담을 통해 진행합니다.`);
      return;
    }
    dispatch(setQuantity(newValue));
  };

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
        <TotallMinusIcon
          onClick={DecreaseCartQuantity}
          disabled={quantity === 1}
        />
        <CartItemInput
          value={quantity}
          onChange={handleCartChangeQuantityInput}
        />
        {/* {item.quantity} */}
        <TotallPlusBtnIcon onClick={IncreseCartQuantity} />
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
  cursor: pointer;
`;
export const TotallMinusIcon = styled(AiOutlineMinusCircle)`
  border-radius: 100px;
  width: 20px;
  height: 20px;
  position: relative;
  font-size: 0;
  display: inline-block;
  cursor: pointer;

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
