import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineUp } from 'react-icons/ai';
import { CakeLayer } from '../../common/CakeList';
import { useDispatch, useSelector } from 'react-redux';
// import { updateCart } from '../../redux/modules/ReservationsLayer';
import { setLayer } from './../../redux/modules/ReservationsCakeDetail';

function SelectedLayers() {
  // 토글 메뉴
  const [isOpen, setIsOpen] = useState(false);
  // 케익 단 선택시 컬러 변경
  const [selectedLayer, setSeletedLayer] = useState(null);

  const dispatch = useDispatch();

  const toggleCakelayer = () => {
    setIsOpen(!isOpen);
  };

  const handleClickLayer = (layer) => {
    dispatch(setLayer(layer));
    setSeletedLayer(layer);
    // console.log(updateCart(layer));
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
          <Cakedetailselectdes>
            웨딩 케이크는 3단을 추천합니다.
          </Cakedetailselectdes>
          {CakeLayer.map((layer) => {
            return (
              <CakedetaillayerBtn
                key={layer.id}
                type='button'
                onClick={() => handleClickLayer(layer)}
                style={{
                  backgroundColor:
                    selectedLayer === layer ? '#ffa0c5' : 'transparent',
                  color: selectedLayer === layer ? '#ffffff' : '#ffa0c5',
                }}
              >
                {layer.Layer}
              </CakedetaillayerBtn>
            );
          })}
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
export const Cakedetailselectdes = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
  color: #7c7a7a;
`;
