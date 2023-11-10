import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPrice,
  setQuantity,
} from '../../redux/modules/ReservationsCakeDetail';

function QuantitySelection({ cake }) {
  const dispatch = useDispatch();

  // 케익 디테일 상태를 가져오는 로직
  const { layer, quantity, price } = useSelector(
    (state) => state.ReservationsCakeDetail
  );

  // 케이크의 기본 가격 상태 설정
  useEffect(() => {
    if (layer !== null) {
      dispatch(setPrice(cake.price * quantity - layer.price * quantity));
    } else {
      dispatch(setPrice(cake.price));
    }
  }, [cake, layer, quantity]);

  // + 버튼을 눌렀을 때
  const IncreseQuantity = () => {
    if (quantity >= 5) {
      alert(`5개 이상의 케이크 예약은 상담을 통해 진행합니다.`);
    } else {
      // 수량을 증가시키고 가격을 업데이트 한다.
      dispatch(setQuantity(quantity + 1));
      // 케이크 단을 선택 시 단 가격에 따라 가격 변동
      if (layer) {
        dispatch(
          setPrice(cake.price * (quantity + 1) - layer.price * (quantity + 1))
        );
      } else {
        dispatch(setPrice(cake.price * (quantity + 1)));
      }
    }
  };

  // - 버튼을 눌렀을 때
  const DecreaseQuantity = () => {
    if (quantity > 1) {
      // 수량을 감소시키고 가격을 업데이트 한다.
      dispatch(setQuantity(quantity - 1));
      if (layer) {
        dispatch(
          setPrice(cake.price * (quantity + 1) - layer.price * (quantity + 1))
        );
      } else {
        dispatch(setPrice(cake.price * (quantity - 1)));
      }
    }
  };

  // input 수량 함수 로직
  const handleChangeQuantityInput = (e) => {
    let newValue = parseInt(e.target.value);

    if (isNaN(newValue)) {
      newValue = '';
      dispatch(setQuantity(newValue));
    } else if (newValue === 0) {
      return false;
    }

    // 수량이 5개 이상일때 얼럿창
    if (newValue > 5) {
      alert(`5개 이상의 케이크 예약은 상담을 통해 진행합니다.`);
      return;
    }
    dispatch(setQuantity(newValue));

    // input에 수량을 적으면 가격에 변동이 있다
    if (layer) {
      dispatch(setPrice(cake.price * newValue - layer.price * newValue));
    } else {
      dispatch(setPrice(cake.price * newValue));
    }
  };

  return (
    <>
      <TotallQuantitySelectionWrap>
        <TotallQuantityDiv>
          <TotallMinusIcon
            onClick={DecreaseQuantity}
            disabled={quantity === 1}
          />
          <TotallQuantityInput
            value={quantity}
            onChange={handleChangeQuantityInput}
          />
          <TotallPlusBtnIcon onClick={IncreseQuantity} />
          <TotallQuantity>{price.toLocaleString()}원</TotallQuantity>
        </TotallQuantityDiv>
      </TotallQuantitySelectionWrap>
    </>
  );
}

export default QuantitySelection;
export const TotallQuantitySelectionWrap = styled.div`
  padding-top: 20px;
  border-top: 2px solid #282828;
`;
export const TotallQuantityDiv = styled.div`
  padding-right: 10px;
`;
export const TotallPlusBtnIcon = styled(AiOutlinePlusCircle)`
  border-radius: 100px;
  width: 20px;
  height: 20px;
  position: relative;
  font-size: 0;
  display: inline-block;
  transform: translate(0, 4px);
`;
export const TotallMinusIcon = styled(AiOutlineMinusCircle)`
  border-radius: 100px;
  width: 20px;
  height: 20px;
  position: relative;
  font-size: 0;
  display: inline-block;
  transform: translate(0, 4px);

  // props로 style 주는 방법
  opacity: ${(props) => (props.disabled ? '0.3;' : '')};
`;
export const TotallQuantityInput = styled.input`
  margin: 0 10px;
  text-align: center;
  line-height: 20px;
  font-size: 1rem;
  width: 30px;
  background-color: transparent;
`;
export const TotallQuantity = styled.h3`
  padding-right: 10px;
  text-align: right;
  float: right;
`;
