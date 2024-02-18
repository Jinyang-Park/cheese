import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ReservationSetDT() {
  const navigate = useNavigate();

  // 1. const ReservationSetTime = useSelector((state) => state.ReservationsDT.time)
  // 2.  {!ReservationSetTime.time || !ReservationSetlDate ? 이 부분에서  Cannot read properties of null (reading 'time')
  // 3. ReservationSetTime.time이 null이므로 읽을 수 없다는 오류다.
  // 4. useSelector((state) => state.ReservationsDT.time)의 결과가 falsy(즉, undefined, null, false, 0, NaN, 빈 문자열 등)인 경우, 빈 객체 {}가 반환됩니다. 이렇게 하면 ReservationSetTime이 null 또는 undefined인 경우에도 ReservationSetTime.time에 안전하게 접근할 수 있습니다. 왜냐하면 JavaScript에서는 null이나 undefined에 프로퍼티를 읽으려고 하면 TypeError가 발생하기 때문입니다. 따라서 || {}를 추가함으로써 이러한 TypeError를 방지하고, 코드의 안정성을 높이는 역할을 합니다.

  const ReservationSetTime =
    useSelector((state) => state.ReservationsDT.time) || {};

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
      // 확인을 눌르면 모든 예약 정보 삭제
      localStorage.clear();
      navigate(`/Reservation/date`);
    }
  };
  return (
    <ReservationBox>
      <ReservationDate>
        <ReservationTitle>치즈본</ReservationTitle>
        {!ReservationSetTime.time || !ReservationSetlDate ? (
          <ReservationemptyDT>예약된 날짜가 없습니다.</ReservationemptyDT>
        ) : (
          <>
            <ReservationFinalDate>{ReservationSetlDate}</ReservationFinalDate>
            <ReservationFinalTime>
              {ReservationSetTime.time}
            </ReservationFinalTime>
            <ChangeDTBtn onClick={handlegotoDateClick}>변경</ChangeDTBtn>
          </>
        )}
      </ReservationDate>
    </ReservationBox>
  );
}

export default ReservationSetDT;
export const ReservationDate = styled.div`
  border: 1px solid #ffdb7e;
  display: flex;
  width: 100%;
  border-radius: 100px;
  height: 45px;
  padding: 8px 20px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    height: 120px;
  }
`;
export const ReservationBox = styled.div`
  padding: 15px 10px;
  border-bottom: 2px solid #ebebeb;
`;
export const ReservationTitle = styled.h3`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
export const ReservationFinalDate = styled.h3`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
export const ReservationFinalTime = styled.h3`
  margin-left: 8px;
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
export const ChangeDTBtn = styled.button`
  margin-left: 20px;
  background: #ffa0c5;
  color: white;
  width: 100%;
  max-width: 60px;
  padding: 5px 0px;
  border-radius: 50px;
  @media screen and (max-width: 480px) {
    margin: 5px 0px 0px 0px;
  }
`;
export const ReservationemptyDT = styled.h3`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
`;
