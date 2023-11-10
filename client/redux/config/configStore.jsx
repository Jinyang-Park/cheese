import { combineReducers } from 'redux';
import ReservationsDT from '../modules/ReservationsDT';
import ReservationsCart from '../modules/ReservationsCart';
import ReservationsLayer from '../modules/ReservationsLayer';
import ReservationsTastingSelection from '../modules/ReservationsTastingSelection';
import ReservationsCakeDetail from '../modules/ReservationsCakeDetail';

// 1. rootReducer를 만들 것이고 --> reducer들을 합칠꺼야
// modules 밑에 있는 여러 파일들이 반환하는 값
// 현재:   calendarRedux,

const rootReducer = combineReducers({
  ReservationsDT,
  ReservationsCart,
  ReservationsLayer,
  ReservationsTastingSelection,
  ReservationsCakeDetail,
});

// 2. export 해서 다른 파일에서 import할 수 있도록 한다.
export default rootReducer;
