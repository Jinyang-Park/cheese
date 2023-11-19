// 1. action items
// 달력
const SELECT_CALENDAR = 'SELECT_CALENDAR';
// const UPLOAD_CALENDAR = 'UPLOAD_CALENDAR';
const DELETE_CALENDAR = 'DELETE_CALENDAR';
// 시간
const SELECT_TIME = 'SELECT_TIME';

const DELETE_TIME = 'DELETE_TIME';

// 결제 후 달력 날짜 리셋
const DT_RESET = 'DT_RESET';

// 달력
// 2. action creators(1)
export const selectCalendar = (formattedDate) => {
  // 클릭한 날짜를 UTC로 변환
  // const utcDate = moment(selectedDate).utc().toDate();
  return {
    type: SELECT_CALENDAR,
    payload: formattedDate,
  };
};

// 3. action creators(3)
export const deleteCalendar = (formattedDate) => {
  return {
    type: DELETE_CALENDAR,
    payload: formattedDate,
  };
};

// 시간
export const selectTime = (time) => {
  return {
    type: SELECT_TIME,
    payload: time,
  };
};

export const deleteTime = (time) => {
  return {
    type: DELETE_TIME,
    payload: time,
  };
};

export const dtReset = () => {
  return {
    type: DT_RESET,
  };
};
// 3. initial State => reuder를 구성할 때
const inintialState = {
  formattedDate: null,
  time: null,
};

// 4. reducer를 만들 것
const ReservationsDT = (state = inintialState, action) => {
  switch (action.type) {
    case 'SELECT_CALENDAR':
      // 캘린더 데이터 가져오기 로직
      return { ...state, formattedDate: action.payload };

    case 'DELETE_CALENDAR':
      // 캘린더 데이터 삭제 로직
      // const updatedCalendar = state.selectedDate !== action.payload;

      return { ...state, formattedDate: null };

    case 'SELECT_TIME':
      // 시간 데이터 가져오기 로직
      return { ...state, time: action.payload };

    case 'DELETE_TIME':
      // 시간 데이터 삭제 로직
      // const updatedTime = state.item !== action.payload;
      return { ...state, time: null };

    case 'DT_RESET':
      return {
        ...inintialState,
      };

    default:
      return state;
  }
};

export default ReservationsDT;
