// 1. action items
const UPDATE_TO_TASTING = 'UPDATE_TO_TASTING';

// 2. action creators(1)
export const updateTasting = (selectedTasting) => {
  return {
    type: UPDATE_TO_TASTING,
    payload: selectedTasting,
  };
};

const inintialState = [];

const ReservationsTastingSelection = (state = inintialState, action) => {
  switch (action.type) {
    case 'UPDATE_TO_TASTING':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default ReservationsTastingSelection;
