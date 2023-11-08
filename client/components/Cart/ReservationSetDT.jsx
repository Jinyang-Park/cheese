import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ReservationSetDT() {
  const navigate = useNavigate();

  const ReservationSetTime = useSelector((state) => state.ReservationsDT.time);
  const ReservationSetlDate = useSelector(
    (state) => state.ReservationsDT.formattedDate
  );
  console.log(ReservationSetTime.time, ReservationSetlDate);
  // const CartItems = useSelector((state) => state.ReservationsQuantity);
  // console.log(CartItems);

  const handlegotoDateClick = () => {
    if (
      window.confirm(
        '예약 날짜 및 시간을 변경하시겠습니까? 진행중인 예약 정보가 초기화 됩니다. '
      )
    ) {
      navigate(`/Reservation/date`);
    }
  };
  return (
    <ReservationDate>
      <ReservationTitle>치즈본</ReservationTitle>
      <ReservationFinalDate>{ReservationSetlDate}</ReservationFinalDate>
      <ReservationFinalTime>{ReservationSetTime.time}</ReservationFinalTime>
      <ChangeDTBtn onClick={handlegotoDateClick}>변경</ChangeDTBtn>
    </ReservationDate>
  );
}

export default ReservationSetDT;
export const ReservationDate = styled.div`
  border: 1px solid #ffdb7e;
  width: 100%;
  padding: 15px;
  border-radius: 500px;
`;
export const ReservationTitle = styled.h3`
  margin-left: 20px;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
`;
export const ReservationFinalDate = styled.h3`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
`;
export const ReservationFinalTime = styled.h3`
  margin-left: 8px;
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
`;
export const ChangeDTBtn = styled.button`
  margin-left: 20px;
  background: #ffa0c5;
  color: white;
  width: 100%;
  max-width: 60px;
  padding: 5px 0px;
  border-radius: 50px;
`;
