import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineUp } from 'react-icons/ai';
function SelectedLayers() {
  // 토글 메뉴
  const [isOpen, setIsOpen] = useState(false);

  const toggleCakelayer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Cakedetailselectelayer>
        <CakedetailselectTitle>케이크 단 선택 (선택필수)</CakedetailselectTitle>
        <CakeToggle onClick={toggleCakelayer}>
          {isOpen ? <CakedetailDownIcon /> : <CakedetailUpIcon />}
        </CakeToggle>
      </Cakedetailselectelayer>
      {isOpen && (
        <>
          <CakedetaillayerBtn>1단</CakedetaillayerBtn>
          <CakedetaillayerBtn>2단</CakedetaillayerBtn>
          <CakedetaillayerBtn>3단</CakedetaillayerBtn>
        </>
      )}
    </>
  );
}

export default SelectedLayers;
export const Cakedetailselectelayer = styled.div`
  position: relative;
  border-top: 1px solid #ebebeb;
  padding: 15px 0;
  line-height: 26px;
  display: flex;
`;
export const CakeToggle = styled.div``;
export const CakedetaillayerBtn = styled.button`
  color: #ffa0c5;
  border: 1px solid #ffa0c5;
  padding: 10px 20px;
  border-radius: 100px;
  margin-right: 30px;
  background-color: transparent;
  margin-bottom: 15px;
`;
export const CakedetailselectTitle = styled.h3`
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
