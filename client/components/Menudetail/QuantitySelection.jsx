import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  deleteToCart,
} from '../../redux/modules/ReservationsQuantity';

function QuantitySelection({ cake }) {
  // 기본 수량 1로 지정
  const [quantity, setQuantity] = useState(1);

  //Menudetail에서 cake(클릭한 케익의 정보) props로 보내준다.
  // cake을 받아와서 cake.price를 기본값으로 넣어준다.
  const [total, setTotal] = useState(cake.price);

  // 케익 숫자 변수 state
  const [changedPrice, setChangedPrice] = useState(0);

  const dispatch = useDispatch();

  // 여기서 product 정보를 Redux store에서 가져옵니다.
  // 이 부분은 실제 store의 구조에 따라 달라질 수 있습니다.
  const product = useSelector((state) => state.payload);

  // 1. 단은 선택하지 않았을때 가격
  // 2. 수량을 조절하지 않았을때 갯수
  // 3. 단을 선택했을때의 가격
  // 4. useEffect 훅은 changedPrice가 업데이트 될 때마다 실행됩니다. 따라서 단을 선택하여 가격이 변동하면 changedPrice가 업데이트되고, 이에 따라 Redux의 상태도 새로운 가격을 반영하여 업데이트 됩니다.
  useEffect(() => {
    const newTotal = cake.price * quantity - changedPrice * quantity;
    dispatch(
      addToCart({ quantity, newTotal, image: cake.image, name: cake.Koname })
    );
  }, [changedPrice]);

  // 케익 선택 Redux store 가져오는 로직
  const layerState = useSelector((state) => state.ReservationsLayer);

  useEffect(() => {
    if (layerState.length > 0) {
      setChangedPrice(layerState[layerState.length - 1].price);
      // console.log(layerState[layerState.length - 1].price);
    }
  }, [layerState]);

  // + 버튼으로 수량 변경하는 함수
  const IncreseQuantity = () => {
    if (quantity >= 5) {
      alert(`5개 이상의 케이크 예약은 상담을 통해 진행합니다.`);
    } else {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      // console.log('수량 확인 로그', newQuantity); // 항상 올바른(새로운) 값이 출력됩니다.

      //최종 가격 로직
      const newTotal = cake.price * newQuantity - changedPrice * newQuantity;
      setTotal(newTotal);

      // 케이크 단 선택 dispatch

      dispatch(
        addToCart(
          {
            ...product,
            quantity: newQuantity,
            image: cake.image,
            name: cake.Koname,
          },
          newTotal
        )
      );
      console.log(quantity, newTotal);
    }
  };

  // - 버튼으로 수량 변경하는 함수
  const DecreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);

      // 최종 가격 로직
      const newTotal = cake.price * newQuantity - changedPrice * newQuantity;
      setTotal(newTotal);

      dispatch(
        deleteToCart(
          {
            ...product,
            quantity: newQuantity,
            image: cake.image,
            name: cake.Koname,
          },
          newTotal
        )
      );
      console.log(quantity, newTotal);
    }
  };

  // input 수량 함수 로직
  const handleChangeQuantityInput = (e) => {
    let newValue = parseInt(e.target.value);

    if (isNaN(newValue)) {
      newValue = '';
      setQuantity(newValue);
    } else if (newValue === 0) {
      return false;
    }

    // 수량이 5개 이상일때 얼럿창
    if (newValue >= 5) {
      alert(`5개 이상의 케이크 예약은 상담을 통해 진행합니다.`);
    }
    setQuantity(newValue);

    // input에 수량을 적으면 가격에 변동이 없었다
    // 위에처럼 아래 로직을 추가하였더니 정상 작동되었다.
    const newTotal = cake.price * newValue - changedPrice * newValue;
    setTotal(newTotal);

    dispatch(
      addToCart(
        {
          ...product,
          quantity: newValue,
          image: cake.image,
          name: cake.Koname,
        },
        newTotal
      )
    );
    console.log(quantity, newTotal);
  };

  //  단 선택 시 가격 변동 로직
  useEffect(() => {
    // 'changedPrice'가 변경될 때마다 'total' 값을 다시 계산합니다.
    const newTotal = cake.price * quantity - changedPrice * quantity;
    setTotal(newTotal);
    // changedPrice, quantity 즉 가격 변동과 수량이 변경될때 마다 useEffect안의 코드가 작동한다.
  }, [changedPrice, quantity]);

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
          <TotallQuantity>{total.toLocaleString()}원</TotallQuantity>
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
