import moment from 'moment';

// 1. action items
// 달력
const SELECT_CALENDAR = 'SELECT_CALENDAR';
// const UPLOAD_CALENDAR = 'UPLOAD_CALENDAR';
const DELETE_CALENDAR = 'DELETE_CALENDAR';
// 시간
const SELECT_TIME = 'SELECT_TIME';
// const UPLOAD_TIME = 'UPLOAD_TIME';
const DELETE_TIME = 'DELETE_TIME';

// 달력
// 2. action creators(1)
export const selectCalendar = (selectedDate) => {
  // 클릭한 날짜를 UTC로 변환
  // const utcDate = moment(selectedDate).utc().toDate();
  return {
    type: SELECT_CALENDAR,
    payload: selectedDate,
  };
};

// 2. action creators(2)
// export const upLoadCalendar = (payload) => {
//   return {
//     type: UPLOAD_CALENDAR,
//     payload,
//   };
// };

// 3. action creators(3)
export const deleteCalendar = (selectedDate) => {
  return {
    type: DELETE_CALENDAR,
    payload: selectedDate,
  };
};

// 시간
export const selectTime = (time) => {
  return {
    type: SELECT_TIME,
    payload: time,
  };
};

// export const upLoadTime = (payload) => {
//   return {
//     type: UPLOAD_TIME,
//     payload,
//   };
// };

export const deleteTime = (time) => {
  return {
    type: DELETE_TIME,
    payload: time,
  };
};

// 3. initial State => reuder를 구성할 때
const inintialState = {
  selectedDate: null,
  time: null,
};

// 4. reducer를 만들 것
// const ReservationsDT = (state = inintialState, action) => {
//   switch (action.type) {
//     case GET_CALENDAR:
//       return [...state, action.payload];
//     case DELETE_CALENDAR:
//       return state.filter((item) => item.id !== action.payload);
//     case GET_TIME:
//       return [...state, action.payload];
//     case DELETE_TIME:
//       return state.filter((item) => item.id !== action.payload);
//     default:
//       return state;
//   }
const ReservationsDT = (state = inintialState, action) => {
  switch (action.type) {
    case 'SELECT_CALENDAR':
      // 캘린더 데이터 가져오기 로직
      return { ...state, selectedDate: action.payload };

    case 'DELETE_CALENDAR':
      // 캘린더 데이터 삭제 로직
      // const updatedCalendar = state.selectedDate !== action.payload;

      return { ...state, selectedDate: null };

    case 'SELECT_TIME':
      // 시간 데이터 가져오기 로직
      return { ...state, time: action.payload };

    case 'DELETE_TIME':
      // 시간 데이터 삭제 로직
      // const updatedTime = state.item !== action.payload;
      return { ...state, time: null };

    default:
      return state;
  }
};

export default ReservationsDT;
