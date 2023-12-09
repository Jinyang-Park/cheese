import React from 'react';
import styled from 'styled-components';

function OrderList({ cart }) {
  console.log('카트', cart);

  // const handleOrederCancelClick = async (itemId) => {
  //   const isConfirmed = window.confirm('주문을 취소하시겠습니까?');
  //   if (!isConfirmed) {
  //     return; // 사용자가 '취소'를 누르면 여기서 함수를 종료합니다.
  //   }
  //   try {
  //     const response = await axios.delete(
  //       `http://localhost:5000/delete/${itemId}`
  //     );
  //     if (response.status === 200) {
  //       // 클릭한 상품이 삭제되면 fetchCartData 함수를 불러 새로 페이지를 생성한다
  //       fetchCartData();

  //       // 결제 날짜와 시간 삭제 api 호출
  //       axios
  //         .delete(`http://localhost:5000/deleteDateTime/${itemId}`)
  //         .then((response) => {
  //           if (response.status !== 200) {
  //             console.log('Failed to delete the date and time');
  //           }
  //         })
  //         .catch((error) => {
  //           console.log('Failed to delete the date and time', error);
  //         });
  //     }
  //   } catch (error) {
  //     console.log('Failed to cancel the order', error);
  //   }
  // };
  return (
    <>
      <CartItemUl>
        <CartItemImg src={cart.image} />
        <CartItemWrap>
          <CartItemliTitle>{cart.Koname}</CartItemliTitle>

          <CartItemResponsive>
            <CartItemLeftli>{cart.layer.Layer}</CartItemLeftli>
            <CartItemLeftli>/</CartItemLeftli>
            <CartItemLeftli>{cart.tastes.join(', ')}</CartItemLeftli>
          </CartItemResponsive>
        </CartItemWrap>
        <CartItemliTitle2>{cart.quantity}개</CartItemliTitle2>
        <CartItemMiddleWrap>
          <CartItemli>{cart.total.toLocaleString()}원</CartItemli>
        </CartItemMiddleWrap>
      </CartItemUl>
    </>
  );
}
export default OrderList;
export const CartItemUl = styled.ul`
  align-items: center;
  position: relative;
  border-bottom: 2px solid #ebebeb;
  padding: 5px 25px;
  line-height: 26px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    justify-content: center;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    justify-content: center;
    flex-direction: column;
  }
`;
export const CartItemImg = styled.img`
  padding: 8px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
export const CartItemWrap = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    padding: 10px 0px;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
export const CartItemliTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
  @media screen and (max-width: 1400px) {
    font-size: 14px;
  }
`;
export const CartItemliTitle2 = styled.h3`
  margin-left: 30px;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
  @media screen and (max-width: 480px) {
    /* margin-right: -10px; */
    font-size: 14px;
    margin-left: 0px;
  }
`;
export const CartDateLi = styled.h3`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
`;
export const CartItemLeftli = styled.h3`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  color: #a2a1a1;
  @media screen and (max-width: 1400px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
export const CartOrderDate = styled.h3`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  color: #a2a1a1;
`;
export const CartItemRightWrap = styled.div`
  display: flex;
`;
export const CartItemInput = styled.input`
  margin: 0 5px;
  text-align: center;
  line-height: 20px;
  font-size: 1rem;
  width: 30px;
  background-color: transparent;
`;
export const CartItemMiddleWrap = styled.div`
  width: 8%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1400px) {
    width: 20%;
  }
  @media screen and (max-width: 990px) {
    width: 28%;
  }
  @media screen and (max-width: 480px) {
    /* margin-right: -10px; */
    margin-right: -10px;
  }
`;
export const CartItemli = styled.h3`
  /* margin-left: 120px; */
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  @media screen and (max-width: 900px) {
    margin-left: 0px;
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 0px;
    font-size: 14px;
  }
`;
export const OrderListBtn = styled.button`
  margin-left: 30px;
  background: #ffa0c5;
  color: white;
  /* width: 100%; */
  max-width: 100px;
  padding: 8px;
  border-radius: 50px;
`;
export const CartItemResponsive = styled.div``;
