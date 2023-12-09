import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CommonStyles from '../../utils/CommonStyles';
import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineUp } from 'react-icons/ai';
import SelectedLayers from '../../components/Menudetail/SelectedLayers';
import TastingSelection from '../../components/Menudetail/TastingSelection';
import QuantitySelection from '../../components/Menudetail/QuantitySelection';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/modules/ReservationsCakeDetail';

function Menudetail() {
  // Reservation 컴포넌트에서 reserve인지 pickup인지 구분해주는 로직
  const { type } = useParams();

  // usevaigater로 케익의 정보를 받아오는 로직
  const location = useLocation();
  const { cake } = location.state;

  // navaigate
  const navigate = useNavigate();

  // dispatch 로직
  const dispatch = useDispatch();

  // 1. 컴포넌트가 처음 렌더링 될 떄 useSelector가 호출되어 리덕스 상태를 가져온다.
  // 2. 상태가 업데이트되면 useSelector 다시 호출되어 새로운 상태를 가져온다.
  // 선택한 테이스팅 맛, 가격, 수량 등등 불러오기
  const { layer, price, quantity, tastes, cart } = useSelector(
    (state) => state.ReservationsCakeDetail
  );

  // 토글 메뉴
  const [isOpen, setIsOpen] = useState(false);

  const toggleAllergydeescrption = () => {
    setIsOpen(!isOpen);
  };

  // 주문하기
  const handlegotoCartClick = () => {
    if (type === 'undefined') {
      alert('웨딩 케이크 또는 일반 케이크인지 선택주세요.');
      navigate(`/Reservation`);
      return;
    }
    if (layer === null) {
      alert('케이크 단을 선택해주세요.');
      return;
      // tastes &&를 추가하여 tastes가 undefined 또는 null이 아닌 경우에만 length 속성을 확인하도록 수정
    }
    // type이 reserve이면 해당 아래 if문 실행
    if (type === 'reserve') {
      if (tastes.length < 3) {
        alert('테이스팅 3가지 맛을 선택해주세요.');
        return;
      }
    }
    if (
      window.confirm(
        '해당 상품을 장바구니에 담았습니다.장바구니로 가시겠습니까?'
      )
    ) {
      // if(cart.some((itme)=> itme.cake.id === cake.id))
      // 주석처리 코드가 안된 이유
      // 1. addtoCart 액션에서 전달받은 cake객체를 payload에 그대로 ...cake 확장하고 있다,
      // 2. cake 객체 안에 이미 id 속성이 있으므로 addToCart함수에서 새로 생성된 id가 아닌 기존의 id가 사용된다.
      // 3. addToCart 액션에서 새로운 아이템을 생성할 때 고유한 id를 생성하는것이 아니므로 cake 객체의 id를 사용해서 아래처럼 코드 수정함
      // find가 아니 some을 쓴 이유
      // 1. some 메서드는 배열 내에서 특정 조건을 만족하는 요소가 하나라도 있는지 확인 조건에 만족하는 요소를 찾으면 즉시 true반환 아니면f false
      // 2. find 메서드는 배열 내에서 특정 조건을 만족하는 첫 번째 요소를 반환 조선을 만족하는 요소를 찾으면 즉시 그 요소를 반환 그렇지 않으면 undefined
      // 장바구니에 특정 케이크가 있는지 없는지 확인하면 되므로 some메소드가 적절
      if (cart.some((item) => item.id === cake.id)) {
        alert('이미 장바구니에 해당 상품이 있습니다.');
        return;
      }
      // 만약 조건문에 다 통과되면 cake, lyaer, price, quantity가 업데이트 되므로 useSelector가 새로 호출이 되며 addToCart액션을 디스패치하여 액션의 payload에는 업데이트 된 cake, layer, price, quantity, tastes 포함된다.'
      dispatch(addToCart(cake, layer, price, quantity, tastes));
      navigate(`/Cart/${type}?type=${cake.type}&?id=${cake.id}`);
    }
  };

  // 디테일 페이지 오면 맨위로 스크롤되서 페이지 마운트됨
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cake]);

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
                  {cake && <CakedetailImg src={cake.image} />}

                  {/* <CakedetailImg src={cake.image} /> */}
                </CakedetailImgDiv>
              </CakedetailInform01>
              {/*케익이름, 영어이름, 가격 정보란 */}
              <CakedetailInform02>
                <CakedetailPrice>
                  <CakedatailTitleLi>
                    <CakedetailH2>{cake.Koname}</CakedetailH2>
                    <CakedeatailLi>{cake.Enname}</CakedeatailLi>
                    <CakedeatailLi>
                      {Number(cake.price).toLocaleString()}원
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
                {/*케이크 단 선택란 */}
                <SelectedLayers />
                {/*테이스팅 단 선택란 */}
                {type === 'reserve' ? <TastingSelection /> : ''}

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
  margin-bottom: 120px;
  @media screen and (max-width: 1400px) {
    width: 90%;
  }
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
  font-size: 0.9rem;
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
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
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
