import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CommonStyles from '../../utils/CommonStyles';
import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineUp } from 'react-icons/ai';
import SelectedLayers from '../../components/Menudetail/SelectedLayers';
import TastingSelection from '../../components/Menudetail/TastingSelection';
import QuantitySelection from '../../components/Menudetail/QuantitySelection';
import { useDispatch, useSelector } from 'react-redux';

function Menudetail() {
  // usevaigater로 케익의 정보를 받아오는 로직
  const location = useLocation();
  const cake = location.state.cake;
  const navigate = useNavigate();

  // dispatch 로직
  const dispatch = useDispatch();

  // 선택한 테이스팅 맛 불러오기
  const ReservationTastingSelected = useSelector(
    (state) => state.ReservationsTastingSelection
  );

  // console.log('테이스팅 선택 로그', ReservationTastingSelected);

  // 선택한 레이어 불러오기
  const ReservationSelectedLayer = useSelector(
    (state) => state.ReservationsLayer
  );

  // console.log('단 선택 로그', ReservationSelectedLayer);

  // 토글 메뉴
  const [isOpen, setIsOpen] = useState(false);

  const toggleAllergydeescrption = () => {
    setIsOpen(!isOpen);
  };

  // 주문하기
  const handlegotoCartClick = () => {
    // ReservationSelectedLayer,ReservationTastingSelected가 콘솔로그로 찍으면 [] 빈배열로 찍힌다
    // 배열이 비어있는지 확인하기 위해서 length의 값으로 체크하는 조건문 추가
    if (ReservationSelectedLayer.length === 0) {
      alert('케이크 단을 선택해주세요.');
      return;
    } else if (ReservationTastingSelected.length === 0) {
      alert('테이스팅 3가지 맛을 선택해주세요.');
      return;
    } else if (ReservationTastingSelected.length < 3) {
      alert('테이스팅 3가지 맛을 선택해주세요. ');
      return;
    }
    if (
      window.confirm(
        '해당 상품을 장바구니에 담았습니다.장바구니로 가시겠습니까?'
      )
    ) {
      navigate(`/Cart/`);
    }
    return;
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
            <ReservationStepLi>
              <ReservationA>일자선택</ReservationA>
            </ReservationStepLi>
            <ReservationStep2Li>
              <ReservationA>메뉴선택</ReservationA>
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
                    <CakedeatailLi>{cake.price}원</CakedeatailLi>
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
                {/*케이크 단 선택란 */}
                <SelectedLayers />
                {/*테이스팅 단 선택란 */}
                <TastingSelection />
                {/*수량 선택란 */}
                <QuantitySelection cake={cake} />
              </CakedetailInform02>
            </CakedetailInner>
            {/*주문하기 버튼 */}
            <TotallOrderBtnWrap>
              <OrderBtn onClick={handlegotoCartClick}>주문하기</OrderBtn>
            </TotallOrderBtnWrap>
          </ReservationDateWrap>
        </ReservationInner>
      </CommonStyles>
    </>
  );
}

export default Menudetail;

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
`;
export const ReservationTabUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  -moz-column-gap: 0;
  column-gap: 0;
`;
export const ReservationStepLi = styled.li`
  background-color: #000;
  border-bottom: 5px solid #f1e4ab;
  text-align: center;
  height: 44px;
  line-height: 44px;
  color: #fff;
  border-radius: 10px 0 0 0;
  &::before {
    content: 'STEP01';
    margin-right: 5px;
    font-weight: 300;
    font-size: 13px;
  }
`;
export const ReservationStep2Li = styled.li`
  border-radius: 0 10px 0 0;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background-color: #f1e4ab;
  border-bottom: 5px solid #f1e4ab;
  color: #000;
  font-weight: 500;
  &::before {
    content: 'STEP02';
    margin-right: 5px;
    font-weight: 300;
    font-size: 13px;
  }
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
export const CakedetailInform01 = styled.div``;
export const CakedetailImgDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  overflow: hidden;
`;
export const CakedetailImg = styled.img`
  width: 100%;
  height: auto;
`;
export const CakedetailInform02 = styled.div`
  padding: 15px 0 30px;
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
`;
export const CakedeatailLi = styled.li`
  font-size: 1.2rem;
  margin-top: 8px;
  line-height: 1.2;
  &:nth-child(3) {
    font-size: 1.8rem;
    margin: 20px 0 0;
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
