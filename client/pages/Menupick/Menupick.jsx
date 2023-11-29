import React, { useState } from 'react';
import CommonStyles from '../../utils/CommonStyles';
import styled from 'styled-components';
import { PiWarningCircleFill } from 'react-icons/pi';
import { FiSearch } from 'react-icons/fi';
import { CakeList } from '../../common/CakeList';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset, setCake } from '../../redux/modules/ReservationsCakeDetail';

function Menupick() {
  // 카테고리
  const [selectedCategory, setSelectedCategory] = useState('전체');
  // 검색어 필터링
  // searchKeywords의 기본값을 "" 해놓은 이유는 검색값을 다 지웠을때 전체 조회가능하기 때문
  const [searchKeyword, setSearchKeyword] = useState('');

  // navaigate
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 카테고리 변경하는 함수
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // 필터링 함수
  const filtereditems =
    selectedCategory === '전체'
      ? CakeList
      : CakeList.filter((item) => item.category === selectedCategory);

  // 검색어 아이콘 함수
  const handleSearch = () => {
    setSearchKeyword(searchKeyword);
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
          {/* 검색 */}
          <ReservationDateWrap>
            <CategorySearch>
              <CategorySearchBox>
                <SearchInput
                  type='text'
                  onChange={(e) => {
                    setSearchKeyword(e.target.value);
                  }}
                />
                <SearchIcon onClick={handleSearch} />
              </CategorySearchBox>
            </CategorySearch>
            {/* 필터 */}
            <ReservtionCategory>
              <CategoryBtn
                onClick={() => handleCategoryChange('전체')}
                // useState의 기본값이 전체로 되어있기 때문에 selectedCategory도 전체의 인자를 가지고 있어 active가 먹히는것이다.
                className={selectedCategory === '전체' ? 'active' : ''}
              >
                전체
              </CategoryBtn>
              <CategoryBtn
                onClick={() => handleCategoryChange('케이크')}
                className={selectedCategory === '케이크' ? 'active' : ''}
              >
                케이크
              </CategoryBtn>
              <CategoryBtn
                onClick={() => handleCategoryChange('컵케이크')}
                className={selectedCategory === '컵케이크' ? 'active' : ''}
              >
                컵케이크
              </CategoryBtn>
              <CategoryBtn
                onClick={() => handleCategoryChange('핑거 케이크')}
                className={selectedCategory === '핑거 케이크' ? 'active' : ''}
              >
                핑거 케이크
              </CategoryBtn>
            </ReservtionCategory>

            {/* 더미데이터 뿌려지는 부분 */}
            <ReservationMenuList>
              {filtereditems
                .filter((filtercake) => {
                  if (searchKeyword === '') {
                    return true;
                  } else if (filtercake.Koname.includes(searchKeyword)) {
                    // console.log('96', filtercake.Koname);
                    return true;
                  }
                })
                .map((cake) => {
                  return (
                    <CakeLi key={cake.id}>
                      <CakeClickWrap
                        onClick={() => {
                          // 상태 초기화
                          dispatch(reset());

                          // cake 전체를 상태에 저장
                          dispatch(setCake(cake));

                          // 페이지 이동 및 cake 정보 넘겨주기
                          navigate(
                            `/Reservation/date/menupick/Menudetail/${cake.id}`,
                            { state: { cake } }
                          );
                        }}
                      >
                        <CakeDiv>
                          <CakeImg src={cake.image} />
                        </CakeDiv>
                        <Cakename>{cake.Koname}</Cakename>
                        <Cakeprice>
                          {' '}
                          {Number(cake.price).toLocaleString()}원
                        </Cakeprice>
                      </CakeClickWrap>
                    </CakeLi>
                  );
                })}
            </ReservationMenuList>
          </ReservationDateWrap>
        </ReservationInner>
      </CommonStyles>
    </>
  );
}

export default Menupick;
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
export const ReservationDateWrap = styled.div`
  padding-bottom: 20px;
  border: 3px solid #f1e4ab;
  border-width: 0 3px 3px 3px;
`;
export const ReservationDatediv = styled.div`
  width: 700px;
  /* float: left; */
  padding: 20px;
`;
export const ReservationSelect = styled.div`
  position: absolute;
  text-align: right;
  width: 48%;
  top: 550px;
  margin-bottom: 20px;
  display: inline-block;
`;
export const ReservationSelect2 = styled.div`
  position: absolute;
  text-align: right;
  width: 100%;
  top: 340px;
  margin-bottom: 20px;
  display: inline-block;
`;
export const ReservationUl = styled.ul`
  width: 90%;
  margin: 0 auto;
`;
export const ReservationLi = styled.li`
  display: inline-block;
  line-height: 20px;
`;
export const ReservationSelectBtn = styled.div`
  border-radius: 50px;
  background-color: #ffa0c5;
  width: 20px;
  height: 20px;
  margin: 0 10px 0 0;
  float: left;
`;
export const ReservationDisabledBtn = styled.div`
  border-radius: 50px;
  background-color: #ddd;
  width: 20px;
  height: 20px;
  margin: 0 10px 0 20px;
  float: left;
`;
export const ReservationTime = styled.div`
  /* width: calc(100% - 780px); */
  /* float: right; */
  padding: 20px 20px 30px 30px;
  margin-top: 10px;
`;
export const ReservationInfo = styled.div`
  position: absolute;
  top: 590px;
  padding-left: 20px;
  /* text-indent: -10px; */
  margin: 20px 0 30px;
`;
export const ReservationInfoH2 = styled.h2`
  padding-left: 8px;
  line-height: 30px;
  height: 30px;
  margin-bottom: 20px;
  font-weight: 400;
  text-indent: 0;
`;
export const ReservationInfoP = styled.p`
  margin-bottom: 5px;
  line-height: 1.6;
`;
export const PiWarningIcon = styled(PiWarningCircleFill)`
  font-size: 30px;
  color: #ffa0c5;
`;
export const ReservationFlex = styled.div`
  display: flex;
`;
export const ReservationBtnWrap = styled.div`
  text-align: center;
  margin: 50px auto 20px;
`;
export const ReservationBtn = styled.button`
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
export const ReservationMenuList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  -moz-column-gap: 20px;
  column-gap: 20px;
  padding: 20px;
`;
export const CakeLi = styled.li`
  text-align: center;
  display: inline-grid;
  margin-bottom: 20px;
`;
export const CakeClickWrap = styled.div`
  cursor: pointer;
`;
export const CakeDiv = styled.div`
  background-color: #ccc;
  width: 100%;
  margin-bottom: 10px;
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  border-radius: 10px;
`;
export const CakeImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  object-fit: contain;
`;
export const Cakename = styled.p`
  font-weight: 400;
  margin-bottom: 5px;
`;
export const Cakeprice = styled.p`
  font-weight: 100;
`;
export const ReservtionCategory = styled.div`
  min-height: 30px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  word-break: keep-all;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;
export const CategoryBtn = styled.button`
  padding: 0 15px;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  background-color: transparent;

  &.active {
    border-radius: 50px;
    border: 1px solid black;
  }
`;
export const CategorySearch = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;
export const CategorySearchBox = styled.div`
  margin: 0 auto;
  border-radius: 100px;
  height: 35px;
  padding: 2px 20px;
  background-color: #ebebeb;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  width: calc(100% - 50px);
  height: 35px;
  outline: none;
`;
export const SearchIcon = styled(FiSearch)`
  width: 30px;
  height: 35px;
  margin-left: 20px;
  cursor: pointer;
  font-size: 0;
  background-size: 25px auto;
  float: right;
`;
