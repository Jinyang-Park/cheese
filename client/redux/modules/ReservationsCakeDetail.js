// 1. action items
const SET_LAYER = 'SET_LAYER';
const SET_TASTE = 'SET_TASTE';
const SET_QUANTITY = 'SET_QUANTITY';
const SET_PRICE = 'SET_PRICE';
// 다른 케익 클릭 시 그 전 케익 단과 수량과 가격이 남아있어서 reset 추가
const RESET = 'RESET';
// 케익의 이미지와 이름의 정보를 상태에 저장해야 된다
const SET_CAKE = 'SET_CAKE';
// 장바구니에 담기
const ADD_TO_CART = 'ADD_TO_CART';
// 장바구니 특정 아이템 삭제
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
// 증가, 감소
const INCREASE_TO_CART = 'INCREASE_TO_CART';
const DECREASE_TO_CART = 'DECREASE_TO_CART';
const SET_CART_ITEM_QUANTITY = 'SET_CART_ITEM_QUANTITY';

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

export const removeFromCart = (cakeId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: cakeId,
  };
};
// addToCart에 클릭한 케이크의 정보와 케이크단, 가격, 수량, 테이스팅 맛을 같이 payload로 전달해준다.
export const addToCart = (cake, layer, price, quantity, tastes) => {
  return {
    type: ADD_TO_CART,
    payload: {
      ...cake,
      layer,
      price,
      quantity: 1, // Add a quantity property to each cake
      tastes,
    },
  };
};

export const increaseQuantity = (cakeId) => {
  return {
    type: INCREASE_TO_CART,
    payload: cakeId,
  };
};

export const decreaseQuantity = (cakeId) => {
  return {
    type: DECREASE_TO_CART,
    payload: cakeId,
  };
};

export const setCartItemQuantity = (cakeId, quantity) => {
  return {
    type: SET_CART_ITEM_QUANTITY,
    payload: {
      cakeId,
      quantity,
    },
  };
};
// 3.initial state
const initialState = {
  layer: null,
  tastes: [],
  quantity: 1,
  price: 0,
  cake: null,
  cart: [], // 장바구니를 배열로 추가합니다.
  total: 0,
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
        tastes: action.payload,
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
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload], // 케이크를 장바구니에 추가합니다.
      };
    case INCREASE_TO_CART:
      const plus = state.cart.find((cake) => cake.id === action.payload);
      if (plus) {
        plus.quantity += 1;
        // plue.quantity = plus.quantity + 1; 같은뜻
      }
      return {
        ...state,
        cart: [...state.cart],
        total: state.total + plus.price,
      };
    case DECREASE_TO_CART:
      const minus = state.cart.find((cake) => cake.id === action.payload);

      if (minus && minus.quantity > 1) {
        minus.quantity -= 1;
      }
      return {
        ...state,
        cart: [...state.cart],
        total: state.total - minus.price,
      };
    case SET_CART_ITEM_QUANTITY:
      const item = state.cart.find((cake) => cake.id === action.payload);

      if (item) {
        item.quantity = action.payload.quantity;
      }
      return {
        ...state,
        cart: [...state.cart],
      };
    case RESET:
      return {
        ...initialState,
        cart: state.cart, // cart 상태는 유지합니다.
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((cake) => cake.id !== action.payload),
        total: state.total - action.payload.price * action.payload.quantity,
      };
    default:
      return state;
  }
};

export default ReservationsCakeDetail;
