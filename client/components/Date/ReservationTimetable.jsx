import React from 'react';
import styled from 'styled-components';

function ReservationTimetable() {
  return (
    <ReservationtimetableUl>
      <ReservationtimetableLi>
        <ReservationInput type='radio' name='time' id='time' />
        <ReservationLabel for='time'>12:00</ReservationLabel>
      </ReservationtimetableLi>
      <ReservationtimetableLi>
        <ReservationInput type='radio' name='time' id='time2' />
        <ReservationLabel for='time2'>12:30</ReservationLabel>
      </ReservationtimetableLi>
      <ReservationtimetableLi>
        <ReservationInput type='radio' name='time' id='time3' />
        <ReservationLabel for='time3'>13:00</ReservationLabel>
      </ReservationtimetableLi>
      <ReservationtimetableLi>
        <ReservationInput type='radio' name='time' id='time4' />
        <ReservationLabel for='time4'>13:30</ReservationLabel>
      </ReservationtimetableLi>
      <ReservationtimetableLi>
        <ReservationInput type='radio' name='time' id='time5' />
        <ReservationLabel for='time5'>14:00</ReservationLabel>
      </ReservationtimetableLi>
      <ReservationtimetableLi>
        <ReservationInput type='radio' name='time' id='time6' />
        <ReservationLabel for='time6'>14:30</ReservationLabel>
      </ReservationtimetableLi>
      <ReservationtimetableLi>
        <ReservationInput type='radio' name='time' id='time7' />
        <ReservationLabel for='time7'>15:00</ReservationLabel>
      </ReservationtimetableLi>
      <ReservationtimetableLi>
        <ReservationInput type='radio' name='time' id='time8' />
        <ReservationLabel for='time8'>15:30</ReservationLabel>
      </ReservationtimetableLi>
      <ReservationtimetableLi>
        <ReservationInput type='radio' name='time' id='time9' />
        <ReservationLabel for='time9'>16:00</ReservationLabel>
      </ReservationtimetableLi>
      <ReservationtimetableLi>
        <ReservationInput type='radio' name='time' id='time10' />
        <ReservationLabel for='time10'>16:30</ReservationLabel>
      </ReservationtimetableLi>
      <ReservationtimetableLi>
        <ReservationInput type='radio' name='time' id='time11' />
        <ReservationLabel for='time11'>17:00</ReservationLabel>
      </ReservationtimetableLi>
      <ReservationtimetableLi>
        <ReservationInput type='radio' name='time' id='time12' />
        <ReservationLabel for='time12'>17:30</ReservationLabel>
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
  /* width: calc(25% - 10px); */
  padding: 10px 5px;
  float: left;
`;
export const ReservationInput = styled.input`
  display: none;
`;
export const ReservationLabel = styled.label`
  width: 135px;
  height: 60px;
  line-height: 60px;
  display: inline-block;
  border: 1px solid #ddd;
  text-align: center;
  cursor: pointer;
`;
