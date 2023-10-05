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
  console.log(product);

  // 케익 선택 Redux store 가져오는 로직
  const layerState = useSelector((state) => state.ReservationsLayer);

  useEffect(() => {
    if (layerState.length > 0) {
      setChangedPrice(layerState[layerState.length - 1].price);
    }
  }, [layerState]);

  // useEffect(() => {}, [
  //   IncreseQuantity,
  //   DecreaseQuantity,
  //   handleChangeQuantityInput,
  // ]);

  // +,- 버튼으로 수량 변경하는 함수.
  const IncreseQuantity = () => {
    if (quantity >= 5) {
      alert(`5개 이상의 케이크 예약은 상담을 통해 진행합니다.`);
    } else {
      setQuantity(quantity + 1);

      // 최종 가격 로직
      const newTotal = cake.price * (quantity + 1) - changedPrice;
      setTotal(newTotal);

      // 케이크 단 선택 dispatch

      dispatch(addToCart({ ...product, quantity: quantity + 1 }, newTotal));
      console.log(quantity, newTotal);
    }
  };

  const DecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);

      // 최종 가격 로직
      const newTotal = cake.price * (quantity - 1) - changedPrice;
      setTotal(newTotal);

      dispatch(deleteToCart({ ...product, quantity: quantity - 1 }, newTotal));
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
    const newTotal = cake.price * newValue - changedPrice;
    setTotal(newTotal);

    dispatch(addToCart({ ...product, quantity: quantity + 1 }, newTotal));
    console.log(quantity, newTotal);
  };

  // 다시다시다시다싯다ㅏ시시시시
  useEffect(() => {
    // 'changedPrice'가 변경될 때마다 'total' 값을 다시 계산합니다.
    const newTotal = cake.price * quantity - changedPrice;

    setTotal(newTotal);
  }, [changedPrice]);
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
