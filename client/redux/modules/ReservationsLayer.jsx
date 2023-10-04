// 1. action items
const UPDATE_TO_CART = 'UPDATE_TO_CART';

// 2. action creators(1)
export const updateCart = (layer) => {
  return {
    type: UPDATE_TO_CART,
    payload: layer,
  };
};

const inintialState = [];

const ReservationsLayer = (state = inintialState, action) => {
  switch (action.type) {
    case 'UPDATE_TO_CART':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default ReservationsLayer;
