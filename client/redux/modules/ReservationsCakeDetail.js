// 1. action items
const SET_LAYER = 'SET_LAYER';
const SET_TASTE = 'SET_TASTE';
const SET_QUANTITY = 'SET_QUANTITY';
const SET_PRICE = 'SET_PRICE';
// 다른 케익 클릭 시 그 전 케익 단과 수량과 가격이 남아있어서 reset 추가
const RESET = 'RESET';
// 케익의 이미지와 이름의 정보를 상태에 저장해야 된다
const SET_CAKE = 'SET_CAKE';

// 2. action creators
export const setLayer = (layer) => {
  return {
    type: SET_LAYER,
    payload: layer,
  };
};

export const setTaste = (tastes) => {
  return {
    type: SET_TASTE,
    payload: tastes,
  };
};

export const setQuantity = (quantity) => {
  return {
    type: SET_QUANTITY,
    payload: quantity,
  };
};

export const setPrice = (price) => {
  return {
    type: SET_PRICE,
    payload: price,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const setCake = (cake) => {
  return {
    type: SET_CAKE,
    payload: cake,
  };
};

// 3.initial state
const initialState = {
  layer: null,
  taste: [],
  quantity: 1,
  price: 0,
  cake: null,
};

// 4. reducer
const ReservationsCakeDetail = (state = initialState, action) => {
  switch (action.type) {
    case SET_LAYER:
      return {
        ...state,
        layer: action.payload,
      };
    case SET_TASTE:
      return {
        ...state,
        taste: action.payload,
      };
    case SET_QUANTITY:
      return {
        ...state,
        quantity: action.payload,
      };
    case SET_PRICE:
      return {
        ...state,
        price: action.payload,
      };
    case SET_CAKE:
      return {
        ...state,
        cake: action.payload, // cake 전체를 상태에 저장합니다.
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default ReservationsCakeDetail;
