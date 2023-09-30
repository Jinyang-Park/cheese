import React, { useState } from 'react';
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

  const dispatch = useDispatch();

  // 여기서 product 정보를 Redux store에서 가져옵니다.
  // 이 부분은 실제 store의 구조에 따라 달라질 수 있습니다.
  const product = useSelector((state) => state.payload);

  // +,- 버튼으로 수량 변경하는 함수.
  const IncreseQuantity = () => {
    setQuantity(quantity + 1);

    // Update the total price
    const newTotal = cake.price * (quantity + 1);
    setTotal(newTotal);

    dispatch(addToCart({ ...product, quantity: quantity + 1 }, newTotal));
    console.log(quantity, newTotal);
  };

  const DecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      // Update the total price
      const newTotal = cake.price * (quantity - 1);
      setTotal(newTotal);

      dispatch(deleteToCart({ ...product, quantity: quantity - 1 }, newTotal));
      console.log(quantity, newTotal);
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
            onChange={(e) => setQuantity(e.target.value)}
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
