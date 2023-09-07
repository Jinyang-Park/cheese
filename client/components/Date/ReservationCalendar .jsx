import React, { useState } from 'react';
import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function ReservationCalendar() {
  const [value, onChange] = useState(new Date());

  // 일, 월 비활성화 코드
  // const tileDisabled = ({ date }) => {
  //   return date.getDay() === 0 || date.getDay() === 1;
  // };

  return (
    <div>
      <Calendar
        onChange={onChange}
        formatDay={(locale, date) => moment(date).format('DD')} // 날'일' 제외하고 숫자만 보이도록 설정
        showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
        next2Label={null} // >> 화살표 없앰
        prev2Label={null} // << 화살표 없앰
        // tileDisabled={tileDisabled}
        // 현재 날짜로부터 2일 후부터 7일 전까지만 선택 가능
        // 2일 후 부터 선택 가능
        minDate={new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)}
        // 2일 후 부터 7일 전까지만 선택 가능
        maxDate={new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)}
        value={value}
      />
    </div>
  );
}

export default ReservationCalendar;
