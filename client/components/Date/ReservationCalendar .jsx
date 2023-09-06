import React, { useState } from 'react';
import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function ReservationCalendar() {
  const [value, onChange] = useState(new Date());

  const tileDisabled = ({ date }) => {
    return date.getDay() === 0 || date.getDay() === 1;
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        formatDay={(locale, date) => moment(date).format('DD')} // 날'일' 제외하고 숫자만 보이도록 설정
        showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
        next2Label={null} // >> 화살표 없앰
        prev2Label={null} // << 화살표 없앰
        tileDisabled={tileDisabled}
        value={value}
      />
    </div>
  );
}

export default ReservationCalendar;
