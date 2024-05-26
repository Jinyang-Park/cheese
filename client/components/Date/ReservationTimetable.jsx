import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { reservationselecttime } from '../../common/reservationselecttime';
import { useDispatch, useSelector } from 'react-redux';
import { selectTime } from '../../redux/modules/ReservationsDT';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';
function ReservationTimetable() {
  // 결제완료 후 시간 버튼 비활성화 context api
  const { PaidTime, setPaidTime } = useContext(AuthContext);

  const [selectedTime, setSelectedTime] = useState(null);

  // 선택한 날짜 가져오기
  const selectedDate = useSelector(
    (state) => state.ReservationsDT.formattedDate
  );

  const dispatch = useDispatch();

  //time을 인자로 전달하는 이유는 클릭된 버튼의 시간 정보를 추적
  const handleClick = (time) => {
    dispatch(selectTime(time));
    setSelectedTime(time);
  };

  // 페이지를 로드할때 마다 서버에서 결제한 날짜와 시간 정보를 가져오는 함수
  const fetchPaidTimeData = async () => {
    try {
      const response = await axios.get(
        'https://api.atelier-de-cheesebon.com/api/cart/paid-time'
      );
      setPaidTime(response.data.dateTime);
    } catch (error) {
      console.log('Failed to fetch paid time data', error);
    }
  };

  useEffect(() => {
    fetchPaidTimeData();
  }, []);

  const FindPaymentDateTime = (formattedDate, time) => {
    return (
      PaidTime &&
      PaidTime.some(
        (paidTime) =>
          paidTime.dateTime_data.formattedDate === formattedDate &&
          paidTime.dateTime_data.time.id === time.id
      )
    );
  };

  return (
    <ReservationtimetableUl>
      <ReservationtimetableLi>
        {reservationselecttime.map((time) => {
          return (
            <>
              <ReservationtimeBtn
                key={time.id}
                type='button'
                disabled={FindPaymentDateTime(selectedDate, time)}
                onClick={() => handleClick(time)}
                style={{
                  backgroundColor:
                    selectedTime === time
                      ? '#ffa0c5'
                      : FindPaymentDateTime(selectedDate, time)
                      ? '#ddd'
                      : 'transparent',
                  color: selectedTime === time ? '#ffffff' : '#000000',
                }}
              >
                {time.time}
              </ReservationtimeBtn>
            </>
          );
        })}
      </ReservationtimetableLi>
      <ReservationSelect2>
        <ReservationUl>
          <ReservationLi>
            <ReservationSelectBtn></ReservationSelectBtn>
            선택
          </ReservationLi>
          <ReservationLi>
            <ReservationDisabledBtn></ReservationDisabledBtn>
            불가
          </ReservationLi>
        </ReservationUl>
      </ReservationSelect2>
    </ReservationtimetableUl>
  );
}

export default ReservationTimetable;
export const ReservationtimetableUl = styled.ul`
  display: inline-block;
  margin-bottom: 20px;
`;
export const ReservationtimetableLi = styled.li`
  float: left;
`;

export const ReservationtimeBtn = styled.button`
  width: 135px;
  margin: 8.5px;
  height: 60px;
  line-height: 60px;
  display: inline-block;
  border: 1px solid #ddd;
  text-align: center;
  cursor: pointer;
  &:hover {
    border: 1px solid #ffa0c5;
  }
  @media screen and (max-width: 480px) {
    width: 100px;
    margin: 10px 22px;
  }
`;
export const ReservationSelect2 = styled.div`
  /* position: absolute; */
  text-align: right;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  display: inline-block;
`;
export const ReservationUl = styled.ul`
  width: 95%;
  margin: 0 auto;
`;
export const ReservationLi = styled.li`
  display: inline-block;
  line-height: 20px;
`;
export const ReservationSelectBtn = styled.div`
  border-radius: 50px;
  background-color: #ffa0c5;
  width: 20px;
  height: 20px;
  margin: 0 10px 0 0;
  float: left;
`;
export const ReservationDisabledBtn = styled.div`
  border-radius: 50px;
  background-color: #ddd;
  width: 20px;
  height: 20px;
  margin: 0 10px 0 20px;
  float: left;
`;
