// // 1. action items

// const ADD_TO_CART = 'ADD_TO_CART';
// const DELETE_FROM_CART = 'DELETE_FROM_CART';
// // 2. add to increse, decrease action items
// const INCREASE_TO_CART = 'INCREASE_TO_CART';
// const DECREASE_TO_CART = 'DECREASE_TO_CART';

// export const addToCart = (product) => {
//   return {
//     type: ADD_TO_CART,
//     payload: product,
//   };
// };

// export const deleteFromCart = (product) => {
//   return {
//     type: DELETE_FROM_CART,
//     payload: product,
//   };
// };

// export const increaseToCart = (product) => {
//   return {
//     type: INCREASE_TO_CART,
//     payload: product,
//   };
// };

// export const decreaseToCart = (product) => {
//   return {
//     type: DECREASE_TO_CART,
//     payload: product,
//   };
// };

// // 3. initial State => reuder를 구성할 때
// const inintialState = {
//   cart: [],
// };

// // 4. reducer를 만들 것
// const ReservationsCart = (state = inintialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       // 카트에 같은 상품이 있는지 체크
//       const existingProduct = state.cart.find(
//         (item) => item.id === action.payload.id
//       );
//       if (existingProduct) {
//         // 만약 카트에 상품이 있다면 상품 갯수 추가
//         existingProduct.quantity += 1;
//         existingProduct.total =
//           existingProduct.price * existingProduct.quantity; // total 계산
//         return {
//           ...state,
//           cart: [...state.cart],
//         };
//       } else {
//         // 만약 카트에 상품이 없다면 추가하는 로직
//         const addtoCart = {
//           id: action.payload.id,
//           image: action.payload.image,
//           name: action.payload.Koname,
//           quantity: 1,
//           price: action.payload.price,
//           total: action.payload.price,
//         };
//         return {
//           ...state,
//           cart: [...state.cart, addtoCart],
//         };
//       }

//     case 'DELETE_FROM_CART':
//       // 카트에서 뺄 상푸 필터 로직
//       const newCart = state.cart.filter(
//         (item) => item.id !== action.payload.id
//       );
//       return {
//         ...state,
//         cart: newCart,
//       };

//     case 'INCREASE_TO_CART':
//       // 카트에서 수량을 추가할 상품을 찾는 로직
//       const itemToIncrement = state.cart.find(
//         (item) => item.id === action.payload.id
//       );
//       itemToIncrement.quantity += 1;
//       itemToIncrement.total = itemToIncrement.price * itemToIncrement.quantity; // total 계산
//       return {
//         ...state,
//         cart: [...state.cart],
//       };

//     case 'DECREASE_TO_CART':
//       // 카트에서 수량을 감소할 상품을 찾는 로직
//       const itemToDecrement = state.cart.find(
//         (item) => item.id === action.payload.id
//       );
//       if (itemToDecrement.quantity > 1) {
//         itemToDecrement.quantity -= 1;
//         itemToDecrement.total =
//           itemToDecrement.price * itemToDecrement.quantity; // total 계산
//         return {
//           ...state,
//           cart: [...state.cart],
//         };
//       }

//       // 만약 상품 수량이 1개일 경우, 카트에서 상품을 제거하는 로직
//       return {
//         ...state,
//         cart: state.cart.filter((item) => item.id !== action.payload.id),
//       };
//     default:
//       return state;
//   }
// };

// export default ReservationsCart;
