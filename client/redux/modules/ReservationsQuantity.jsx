// 1. action items
// 상품 추가
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_TO_CART = 'DELETE_TO_CART';

// 2. action creators(1)
export const addToCart = (product, total) => {
  return {
    type: ADD_TO_CART,
    payload: { product, total },
  };
};

// 2. action creators(2)
export const deleteToCart = (product, total) => {
  return {
    type: DELETE_TO_CART,
    payload: { product, total },
  };
};

// 3. initial State => reuder를 구성할 때
const inintialState = {};

// 4. reducer를 만들 것
const ReservationsQuantity = (state = inintialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // 상품 추가 데이터 가져오기 로직
      return [...state, action.payload];

    case 'DELETE_TO_CART':
      // 상품 데이터 삭제 로직
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default ReservationsQuantity;
