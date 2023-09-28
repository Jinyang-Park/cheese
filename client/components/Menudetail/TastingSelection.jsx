import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineUp } from 'react-icons/ai';

function TastingSelection() {
  // 토글 메뉴
  const [isOpen, setIsOpen] = useState(false);

  const toggleTastingSelection = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <CakedetailTastingSelection>
        <CakedetailTastingSelectionTitle>
          테이스팅 선택(3가지맛 선택 필수)
        </CakedetailTastingSelectionTitle>
        <CakeToggle onClick={toggleTastingSelection}>
          {isOpen ? <CakedetailDownIcon /> : <CakedetailUpIcon />}
        </CakeToggle>
      </CakedetailTastingSelection>
      {isOpen && (
        <>
          <CakedeTastingSelectionBtn>클래식 크림</CakedeTastingSelectionBtn>
          <CakedeTastingSelectionBtn>초코</CakedeTastingSelectionBtn>
          <CakedeTastingSelectionBtn>레몬 얼그레이</CakedeTastingSelectionBtn>
          <CakedeTastingSelectionBtn>머랭 스트로베리</CakedeTastingSelectionBtn>
          <CakedeTastingSelectionBtn>민트</CakedeTastingSelectionBtn>
          <CakedeTastingSelectionBtn>믹스베리</CakedeTastingSelectionBtn>
          <CakedeTastingSelectionBtn>레드벨벳</CakedeTastingSelectionBtn>
          <CakedeTastingSelectionBtn>우유 생크림</CakedeTastingSelectionBtn>
          <CakedeTastingSelectionBtn>카라멜 초콜릿</CakedeTastingSelectionBtn>
          <CakedeTastingSelectionBtn>
            스트로베리 피스타치오
          </CakedeTastingSelectionBtn>
          <CakedeTastingSelectionBtn>오렌지 체다치즈</CakedeTastingSelectionBtn>
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
  align-items: center;
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
