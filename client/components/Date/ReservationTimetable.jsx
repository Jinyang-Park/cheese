import React, { useState } from 'react';
import styled from 'styled-components';
import { reservationselecttime } from '../../common/reservationselecttime';
import { useDispatch } from 'react-redux';
import { selectTime } from '../../redux/modules/ReservationsDT';

function ReservationTimetable() {
  const [selectedTime, setSelectedTime] = useState(null);
  const dispatch = useDispatch();
  //time을 인자로 전달하는 이유는 클릭된 버튼의 시간 정보를 추적
  const handleClick = (time) => {
    dispatch(selectTime(time));
    setSelectedTime(time);
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
                onClick={() => handleClick(time)}
                style={{
                  backgroundColor:
                    selectedTime === time ? '#ffa0c5' : 'transparent',
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
