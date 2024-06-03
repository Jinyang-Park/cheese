import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import CommonStyles from '../../utils/CommonStyles';
import ReservationSetDT from '../../components/Cart/ReservationSetDT';
import { useDispatch, useSelector } from 'react-redux';
import ReservationItem from '../../components/Cart/ReservationItem';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { cartReset } from '../../redux/modules/ReservationsCakeDetail';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { dtReset } from '../../redux/modules/ReservationsDT';
import { AuthContext } from '../../contexts/AuthContext';

function ShoppingCart() {
  const { type } = useParams();

  // 결제완료 후 시간 버튼 비활성화 context api
  const { PaidTime, setPaidTime } = useContext(AuthContext);

  const cart = useSelector((state) => state.ReservationsCakeDetail.cart);
  // 선택한 날짜와 시간도 mysql에 보내주기 위한 로작 추가
  const cartDT = useSelector((state) => state.ReservationsDT);

  // 1. reduce가 처음 실행될 때, sum은 0(초기값)이고, item은 cart 배열의 첫번째 요소입니다.
  // 2. 리듀서 함수가 실행되면서 sum + item.total의 값이 계산되고, 이 값이 다음 누산기 값으로 업데이트됩니다.
  // 3.이후 reduce는 배열의 다음 요소에 대해 같은 작업을 수행하고, 이 과정을 배열의 모든 요소를 처리할 때까지 반복합니다.
  // 4.모든 요소를 처리한 후 reduce는 최종 누산기 값을 반환합니다. 이 경우에는 sum이며, 이 값은 cart 배열의 모든 item.total의 합계입니다.
  // 5.따라서 reduce를 사용하면 배열의 모든 요소를 하나의 값으로 결합할 수 있습니다. 이 예제에서는 장바구니의 모든 아이템 가격을 합산하는데 사용되었습니다.
  const totalCost = cart.reduce((sum, item) => sum + item.total, 0);

  // navaigate
  const navigate = useNavigate();
  const dispatch = useDispatch();

  axios.defaults.withCredentials = true;

  const handlePaymentClick = () => {
    // 사용자에게 결제 확인 얼럿을 먼저 보여줍니다.
    const isConfirmed = window.confirm('결제를 하시겠습니까?');
    if (!isConfirmed) {
      return; // 사용자가 '취소'를 누르면 여기서 함수를 종료합니다.z
    }
    axios
      // 객체에 cart, cartDT 정보 보내주기
      .post('https://api.atelier-de-cheesebon.com/api/cart/add', {
        cart,
        cartDT,
      })
      .then((response) => {
        if (response.status === 200) {
        }
        console.log(response.data);
        navigate(`/Mypage`);
        dispatch(cartReset());
        dispatch(dtReset());
        axios.post('https://api.atelier-de-cheesebon.com/api/cart/save-time', {
          dateTime: cartDT,
        });
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CommonStyles>
        <ReservationWrap>
          <ReservationTitle>장바구니</ReservationTitle>
        </ReservationWrap>
        <ReservationInner>
          {/* 오더 탭 */}
          <ReservationTabUl>
            <ReservationStepLi>
              <ReservationA>예약</ReservationA>
            </ReservationStepLi>
          </ReservationTabUl>
          <ReservationDateWrap>
            <ReservationSetDT />
            {cart.length === 0 ? (
              <CartemptyWrap>
                <CartemptyIcon />
                <Cartemptytxt>장바구니에 담긴 상품이 없습니다.</Cartemptytxt>
              </CartemptyWrap>
            ) : (
              cart.map((item) => {
                return <ReservationItem key={item.id} item={item} />;
              })
            )}
            <CartTotalWrap>
              <CartTotalPriceTitle>합계금액</CartTotalPriceTitle>
              <CartTotalPrice>{totalCost.toLocaleString()}원</CartTotalPrice>
            </CartTotalWrap>
            <CartItemBtnWrap>
              <CartItemAddToProuductBtn
                onClick={() => {
                  navigate(`/Reservation/date/${type}/menupick`);
                }}
              >
                예약상품추가
              </CartItemAddToProuductBtn>
              <CartItemOrderBtn onClick={handlePaymentClick}>
                결제하기
              </CartItemOrderBtn>
            </CartItemBtnWrap>
          </ReservationDateWrap>
        </ReservationInner>
      </CommonStyles>
    </>
  );
}

export default ShoppingCart;
export const ReservationWrap = styled.div`
  position: relative;
`;
export const ReservationTitle = styled.h1`
  padding-top: 200px;
  margin: 0 0 100px;
  text-align: center;
  font-size: 1.75em;
  font-weight: 500;
  letter-spacing: 0;
`;
export const ReservationInner = styled.div`
  width: 1366px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 120px;
  @media screen and (max-width: 1400px) {
    width: 90%;
  }
`;
export const ReservationTabUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  -moz-column-gap: 0;
  column-gap: 0;
`;
export const ReservationStepLi = styled.li`
  border-radius: 10px 10px 0 0;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background-color: #f1e4ab;
  border-bottom: 5px solid #f1e4ab;
  color: #000;
  font-weight: 500;
`;
export const ReservationA = styled.a``;
export const CakedetailInner = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 400px 1fr;
  -moz-column-gap: 40px;
  column-gap: 40px;
`;
export const ReservationDateWrap = styled.div`
  border: 3px solid #f1e4ab;
  border-width: 0 3px 3px 3px;
`;
export const CartItemBtnWrap = styled.div`
  text-align: center;
  margin: 50px auto 20px;
`;
export const CartItemAddToProuductBtn = styled.button`
  background: #ebebeb;
  border: 1px solid #ebebeb;
  color: #846e23;
  width: 100%;
  max-width: 240px;
  padding: 15px;
  margin: 3px 1px;
  border-radius: 500px;
  font-size: 1em;
`;
export const CartItemOrderBtn = styled.button`
  background: #ffdb7e;
  border: 1px solid #ffdb7e;
  color: #846e23;
  width: 100%;
  max-width: 240px;
  padding: 15px;
  margin: 3px 1px;
  border-radius: 500px;
  font-size: 1em;
`;
export const CartTotalWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 25px;
  margin-top: 10px;
`;
export const CartTotalPriceTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
`;
export const CartTotalPrice = styled.h3`
  margin-left: 10px;
  font-size: 18px;
  font-weight: 600;
  display: inline-block;
`;
export const CartemptyWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
`;
export const Cartemptytxt = styled.h3`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
`;
export const CartemptyIcon = styled(AiOutlineShoppingCart)`
  width: 70px;
  height: 70px;
  color: #8b8b8b;
`;
