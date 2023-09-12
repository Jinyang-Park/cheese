// 1. action items
// 달력
const GET_CALENDAR = 'GET_CALENDAR';
// const UPLOAD_CALENDAR = 'UPLOAD_CALENDAR';
const DELETE_CALENDAR = 'DELETE_CALENDAR';
// 시간
const GET_TIME = 'GET_TIME';
// const UPLOAD_TIME = 'UPLOAD_TIME';
const DELETE_TIME = 'DELETE_TIME';

// 달력
// 2. action creators(1)
export const getCalendar = (payload) => {
  return {
    type: GET_CALENDAR,
    payload,
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
export const deleteCalendar = (payload) => {
  return {
    type: DELETE_CALENDAR,
    payload,
  };
};

// 시간
export const getTime = (payload) => {
  return {
    type: GET_TIME,
    payload,
  };
};

// export const upLoadTime = (payload) => {
//   return {
//     type: UPLOAD_TIME,
//     payload,
//   };
// };

export const deleteTime = (payload) => {
  return {
    type: DELETE_TIME,
    payload,
  };
};

// 3. initial State => reuder를 구성할 때
const inintialState = {};

// 4. reducer를 만들 것
const ReservationsDT = (state = inintialState, action) => {
  switch (action.type) {
    case GET_CALENDAR:
      return [...state, action.payload];
    case DELETE_CALENDAR:
      return state.filter((item) => item.id !== action.payload);
    case GET_TIME:
      return [...state, action.payload];
    case DELETE_TIME:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default ReservationsDT;
