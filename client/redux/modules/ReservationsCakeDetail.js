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

// 장바구니 로직에 필요한 친구들
// 증가, 감소
const INCREASE_TO_CART = 'INCREASE_TO_CART';
const DECREASE_TO_CART = 'DECREASE_TO_CART';
const SET_CART_ITEM_QUANTITY = 'SET_CART_ITEM_QUANTITY';
// 결제 후 카트 reset
const CART_RESRT = 'CART_RESRT';

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
      quantity,
      tastes,
      total: price,
      unitPrice: price / quantity,
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

export const setCartItemQuantity = (cakeId, quantity, newprice) => {
  return {
    type: SET_CART_ITEM_QUANTITY,
    payload: {
      cakeId,
      quantity,
      newprice,
    },
  };
};

// 결제 후 카트 리셋
export const cartReset = () => {
  return {
    type: CART_RESRT,
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
  unitPrice: 0,
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

    // 수량 추가
    case INCREASE_TO_CART:
      return {
        ...state,
        cart: state.cart.map((cake) =>
          cake.id === action.payload
            ? {
                ...cake,
                quantity: cake.quantity + 1,
                total: cake.unitPrice * (cake.quantity + 1),
              }
            : cake
        ),
      };

    // 수량 감소
    case DECREASE_TO_CART:
      return {
        ...state,
        cart: state.cart.map((cake) =>
          cake.id === action.payload && cake.quantity > 1
            ? {
                ...cake,
                quantity: cake.quantity - 1,
                total: cake.unitPrice * (cake.quantity - 1),
                // total 값은 감소하기 전의 수량과 가격을 곱한 값으로 설정됨
                // total: (cake.price / cake.quantity) * (cake.quantity - 1),
              }
            : cake
        ),
      };
    // 수량 인풋
    case SET_CART_ITEM_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((cake) =>
          cake.id === action.payload.cakeId
            ? {
                ...cake,
                quantity: action.payload.quantity,
                total: action.payload.newprice,
              }
            : cake
        ),
      };

    // 리셋
    case RESET:
      return {
        ...initialState,
        cart: state.cart, // cart 상태는 유지합니다.
      };

    // 결제 후 카트 리셋
    case CART_RESRT:
      return {
        ...initialState,
      };

    // 상품 삭제
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
