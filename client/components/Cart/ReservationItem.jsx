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
  setCartItemQuantity,
} from '../../redux/modules/ReservationsCakeDetail';
import { useParams } from 'react-router-dom';

function ReservationItem({ item }) {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setUnitPrice(item.price * quantity));
  // }, [item, quantity]);

  // 케익 디테일 상태를 가져오는 로직
  const { quantity, cart } = useSelector(
    (state) => state.ReservationsCakeDetail
  );

  // + 버튼을 눌렀을 때
  const IncreseCartQuantity = () => {
    const cartItem = cart.find((cake) => cake.id === item.id);
    if (cartItem && cartItem.quantity < 5) {
      dispatch(increaseQuantity(item.id));
    } else {
      alert(`5개 이상의 케이크 예약은 상담을 통해 진행합니다.`);
    }
  };

  // - 버튼을 눌렀을 때
  const DecreaseCartQuantity = () => {
    const cartItem = cart.find((cake) => cake.id === item.id);
    if (cartItem && cartItem.quantity > 1) {
      dispatch(decreaseQuantity(item.id));
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
    // 새로운 가격을 계산
    const newPrice = item.unitPrice * newValue;
    dispatch(setCartItemQuantity(item.id, newValue, newPrice));
  };

  return (
    <CartItemUl>
      <CartItemWrap>
        <CartItemImg src={item.image} />
        <CartItemliTitle>{item.Koname}</CartItemliTitle>
        <CartItemResponsive>
          <CartItemLeftli>{item.layer.Layer}</CartItemLeftli>
          <CartItemLeftli>/</CartItemLeftli>

          <CartItemLeftli>{item.tastes.join(', ')}</CartItemLeftli>
        </CartItemResponsive>
      </CartItemWrap>
      <CartItemRightWrap>
        <TotallMinusIcon
          onClick={DecreaseCartQuantity}
          disabled={item.quantity === 1}
        />
        <CartItemInput
          value={item.quantity}
          onChange={handleCartChangeQuantityInput}
        />
        {/* {item.quantity} */}
        <TotallPlusBtnIcon onClick={IncreseCartQuantity} />
      </CartItemRightWrap>
      <CartItemMiddleWrap>
        <CartItemli>
          {item.total ? item.total.toLocaleString() : 0}원
        </CartItemli>
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
  @media screen and (max-width: 900px) {
    justify-content: center;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    justify-content: center;
    flex-direction: column;
  }
`;
export const CartItemImg = styled.img`
  padding: 8px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
export const CartItemWrap = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    padding: 10px 0px;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
export const CartItemRightWrap = styled.div`
  display: flex;
  @media screen and (max-width: 900px) {
    padding: 8px;
  }
  @media screen and (max-width: 480px) {
    padding: 8px;
  }
`;
export const CartItemMiddleWrap = styled.div`
  width: 8%;
  display: flex;
  align-items: center;
  margin-right: -150px;
  @media screen and (max-width: 1400px) {
    width: 20%;
  }
  @media screen and (max-width: 990px) {
    width: 28%;
  }
  @media screen and (max-width: 480px) {
    /* margin-right: -10px; */
    margin-right: -30px;
  }
`;
export const CartItemliTitle = styled.h3`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
  @media screen and (max-width: 1400px) {
    font-size: 14px;
  }
`;
export const CartItemLeftli = styled.h3`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  color: #a2a1a1;
  @media screen and (max-width: 1400px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
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
  @media screen and (max-width: 900px) {
    margin-left: 0px;
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 0px;
    font-size: 14px;
  }
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
  @media screen and (max-width: 900px) {
    margin-left: 100%;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 100%;
    margin-bottom: 10px;
  }
`;
export const CartItemResponsive = styled.div``;
