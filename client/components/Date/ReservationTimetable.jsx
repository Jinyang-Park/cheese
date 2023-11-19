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

  useEffect(() => {
    // 페이지를 로드할때 마다 서버에서 결제한 날짜와 시간 정보를 가져옴
    axios.get('http://localhost:5000/getPaidTime').then((response) => {
      setPaidTime(response.data.dateTime);
    });
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
`;
