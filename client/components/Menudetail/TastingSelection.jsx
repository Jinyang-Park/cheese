import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineUp } from 'react-icons/ai';
import { CakeTasting } from '../../common/CakeList';
import { useDispatch } from 'react-redux';
import { updateTasting } from '../../redux/modules/ReservationsTastingSelection';

function TastingSelection() {
  // 토글 메뉴
  const [isOpen, setIsOpen] = useState(false);

  // 테이스팅 선택시 컬러 변경
  const [selectedTasting, setSelectedTasting] = useState([]);

  const dispatch = useDispatch();

  const toggleTastingSelection = () => {
    setIsOpen(!isOpen);
  };

  // 버튼 여러개 선택 가능한 로직
  const handleClickTast = (e) => {
    // 사용자가 클릭한 DOM 요소 즉, 버튼 요소를 가르킴
    const selected = e.target.innerText;
    // 현재 클릭한 테이스팅 이름이 (selected) 이미 선택된 테이스팅 목록인 selectedTasting에 있는지 확인
    if (selectedTasting.includes(selected)) {
      // 만약 목록에 있다면 해당 테이스팅을 목록에서 제거한다.
      // 현재 클릭한 테이스팅과 다른 모든 테이스팅만 새로운 배열을 만듬
      setSelectedTasting((prev) =>
        prev.filter((notTasting) => notTasting !== selected)
      );
    } else {
      if (selectedTasting.length >= 3) {
        alert('최대 3개까지만 선택 가능합니다.');
        return;
      }
      // 새 배열을 setSelectedTasting 이용하여 상태 업데이트 함
      setSelectedTasting((prev) => [...prev, selected]);
    }
  };

  useEffect(() => {
    //선택된 테이스팅 정보(selectedTasting)의 길이가 0보다 큰 경우에만 dispatch 함수를 호출하도록 조건문을 추가
    //따라서 선택된 테이스팅 정보가 없을 때는 dispatch 함수를 건너뛰게 됩니다.
    if (selectedTasting.length > 0) {
      dispatch(updateTasting(selectedTasting));
      console.log(updateTasting(selectedTasting));
    }
  }, [selectedTasting, dispatch]);

  return (
    <>
      <CakedetailTastingSelection>
        <CakedetailTastingSelectionTitle>
          테이스팅 선택 (기본 3가지 맛 선택 필수)
        </CakedetailTastingSelectionTitle>
        <CakeToggle onClick={toggleTastingSelection}>
          {isOpen ? <CakedetailDownIcon /> : <CakedetailUpIcon />}
        </CakeToggle>
      </CakedetailTastingSelection>
      {isOpen && (
        <>
          <Cakedetailselectdes>
            웨딩 케이크 상담 예약 시 선택하신 3가지 맛을 볼 수 있습니다.
            (테이스팅 후 원하시는 맛으로 변경 가능합니다.)
          </Cakedetailselectdes>
          {CakeTasting.map((tast) => {
            return (
              <CakedeTastingSelectionBtn
                key={tast.id}
                type='button'
                className={
                  // 각 버튼은 자신의 텍스트(즉, 자신의 '테이스팅'값)선택된 테이스팅 목록 selectedTasting에 포함되어 있는 경우 'active' 클래스 이름을 가져 css 변경
                  selectedTasting.includes(tast.Tasting) ? 'active' : ''
                }
                onClick={handleClickTast}
              >
                {tast.Tasting}
              </CakedeTastingSelectionBtn>
            );
          })}
        </>
      )}
    </>
  );
}

export default TastingSelection;
export const CakedetailTastingSelection = styled.div`
  position: relative;
  border-top: 1px solid #ebebeb;
  padding: 15px 0;
  line-height: 26px;
  display: flex;
`;
export const CakeToggle = styled.div``;
export const CakedeTastingSelectionBtn = styled.button`
  color: #ffa0c5;
  border: 1px solid #ffa0c5;
  padding: 10px 20px;
  border-radius: 100px;
  margin-right: 15px;
  background-color: transparent;
  margin-bottom: 15px;
  &.active {
    background-color: #ffa0c5;
    color: #ffffff;
  }
`;
export const CakedetailTastingSelectionTitle = styled.h3`
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
export const Cakedetailselectdes = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
  color: #7c7a7a;
`;
