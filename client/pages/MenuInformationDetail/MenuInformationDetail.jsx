import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CommonStyles from '../../utils/CommonStyles';
import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineUp } from 'react-icons/ai';

function MenuInformationDetail() {
  // usevaigater로 케익의 정보를 받아오는 로직
  const location = useLocation();
  const { cake } = location.state;

  // 토글 메뉴
  const [isOpen, setIsOpen] = useState(false);

  const toggleAllergydeescrption = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CommonStyles>
        <ReservationWrap>
          <ReservationTitle>예약</ReservationTitle>
        </ReservationWrap>
        <ReservationInner>
          {/* 오더 탭 */}
          <ReservationTabUl>
            <ReservationStep2Li>
              <ReservationA>메뉴 디테일</ReservationA>
            </ReservationStep2Li>
          </ReservationTabUl>
          <ReservationDateWrap>
            <CakedetailInner>
              {/*이미지 란 */}
              <CakedetailInform01>
                <CakedetailImgDiv>
                  <CakedetailImg src={cake.image} />
                </CakedetailImgDiv>
              </CakedetailInform01>
              {/*케익이름, 영어이름, 가격 정보란 */}
              <CakedetailInform02>
                <CakedetailPrice>
                  <CakedatailTitleLi>
                    <CakedetailH2>{cake.Koname}</CakedetailH2>
                    <CakedeatailLi>{cake.Enname}</CakedeatailLi>
                    <CakedeatailLi>
                      {cake.price.toLocaleString()}원
                    </CakedeatailLi>
                  </CakedatailTitleLi>
                </CakedetailPrice>
                {/*케익 정보, 알레르기란 */}
                <CakedetailInformation>
                  <CakedeatailLitxt>{cake.detail}</CakedeatailLitxt>
                  <CakedetailAllergy>
                    <CakedetailAllergycause>
                      알레르기 유발 원인
                    </CakedetailAllergycause>
                    {/*아이콘 클릭시 드롭다운 되면서 해당 알러지정보 나오는 로직 */}
                    <CakedetailIcon onClick={toggleAllergydeescrption}>
                      {isOpen ? <CakedetailDownIcon /> : <CakedetailUpIcon />}
                    </CakedetailIcon>
                  </CakedetailAllergy>
                  {isOpen && (
                    <CakedetailAllergydes>
                      {cake.allergy.join(', ')}
                    </CakedetailAllergydes>
                  )}
                </CakedetailInformation>
                {/* <QuantitySelection cake={cake} /> */}
              </CakedetailInform02>
            </CakedetailInner>
            {/*주문하기 버튼 */}
            {/* <TotallOrderBtnWrap>
              <OrderBtn onClick={handlegotoCartClick}>주문하기</OrderBtn>
            </TotallOrderBtnWrap> */}
          </ReservationDateWrap>
        </ReservationInner>
      </CommonStyles>
    </>
  );
}

export default MenuInformationDetail;
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

export const ReservationStep2Li = styled.li`
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
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ReservationDateWrap = styled.div`
  border: 3px solid #f1e4ab;
  border-width: 0 3px 3px 3px;
`;
export const CakedetailInform01 = styled.div``;
export const CakedetailImgDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  overflow: hidden;
`;
export const CakedetailImg = styled.img`
  width: 100%;
  @media screen and (max-width: 900px) {
    width: 80%;
    margin: 0 auto;
  }
`;
export const CakedetailInform02 = styled.div`
  padding: 15px 0 30px;
  @media screen and (max-width: 900px) {
    padding: 30px 0 30px;
  }
`;
export const CakedetailPrice = styled.ul`
  margin-bottom: 30px;
`;
export const CakedatailTitleLi = styled.li`
  line-height: 1.2;
`;
export const CakedetailH2 = styled.h2`
  font-size: 2.6rem;
  font-weight: 500;
  @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;
export const CakedeatailLi = styled.li`
  font-size: 1.2rem;
  margin-top: 8px;
  line-height: 1.2;
  &:nth-child(3) {
    font-size: 1.8rem;
    margin: 20px 0 0;
  }
  @media screen and (max-width: 1024px) {
    &:nth-child(3) {
      font-size: 1.5rem;
      margin: 20px 0 0;
    }
  }
`;
export const CakedetailInformation = styled.ul``;
export const CakedeatailLitxt = styled.li`
  margin-bottom: 20px;
`;
export const CakedetailAllergy = styled.li`
  position: relative;
  border-top: 1px solid #ebebeb;
  padding: 15px 0;
  line-height: 26px;
  display: flex;
`;
export const CakedetailAllergycause = styled.h3`
  font-size: 18px;
  font-weight: 500;
  display: inline-block;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;
export const CakedetailDownIcon = styled(AiOutlineDown)`
  position: absolute;
  right: 0;
  padding: 0 15px;
  color: #959595;
  width: 20px;
  height: 20px;
`;
export const CakedetailUpIcon = styled(AiOutlineUp)`
  position: absolute;
  right: 0;
  padding: 0 15px;
  color: #959595;
  width: 20px;
  height: 20px;
`;
export const CakedetailAllergydes = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
  color: #7c7a7a;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;
export const CakedetailIcon = styled.div``;
export const TotallOrderBtnWrap = styled.div`
  text-align: center;
  margin: 50px auto 20px;
`;
export const OrderBtn = styled.button`
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
