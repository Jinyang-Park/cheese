import React from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { CakeModalList, CupcakeModalList } from '../../common/modalList';

const Modal = ({ closeModal, selectedTitle }) => {
  const WeddingCakeInfo = selectedTitle === '웨딩 케이크 상담 예약이란?';

  return (
    <ModalBox>
      <ModalWrap>
        {WeddingCakeInfo ? (
          <>
            {CakeModalList.map((cake) => {
              return (
                <>
                  <ModalTitle>{cake.title}</ModalTitle>
                  <ModalcloseBtn onClick={closeModal} />
                  <ModalReserveInfo>
                    <ModalUl>
                      <ModalWarings>{cake.warnings}</ModalWarings>
                      <ModalWaringsInfo>
                        사전 예약은 픽업 희망일 기준 2일~7일 전 까지 가능합니다.
                      </ModalWaringsInfo>
                    </ModalUl>
                  </ModalReserveInfo>
                </>
              );
            })}
          </>
        ) : (
          <>
            {CupcakeModalList.map((cup) => {
              return (
                <>
                  <ModalTitle>{cup.title}</ModalTitle>
                  <ModalcloseBtn onClick={closeModal} />
                  <ModalReserveInfo>
                    <ModalUl>
                      <ModalWarings>주문시 유의사항</ModalWarings>
                      <ModalWaringsInfo>
                        사전 예약은 픽업 희망일 기준 2일~7일 전 까지 가능합니다.
                      </ModalWaringsInfo>
                    </ModalUl>
                  </ModalReserveInfo>
                </>
              );
            })}
          </>
        )}
      </ModalWrap>
    </ModalBox>
  );
};

export default Modal;

export const ModalBox = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-width: 280px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
  z-index: 9999;
`;
export const ModalWrap = styled.div`
  border: 1px solid #282828;
  background-color: #fff;
  border-radius: 15px;
  min-height: 500px;
  overflow: hidden;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const ModalTitle = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  width: 100%;
`;
export const ModalcloseBtn = styled(GrClose)`
  width: 30px;
  height: 30px;
  font-size: 0;
  position: absolute;
  top: 25px;
  right: 30px;
  cursor: pointer;
`;
export const ModalReserveInfo = styled.div`
  width: 90%;
  max-width: 500px;
  height: calc(100% - 80px);
  margin: 0 auto;
  margin-top: 80px;
`;
export const ModalUl = styled.ul`
  margin-top: 50px;
  padding-bottom: 50px;
`;
export const ModalWarings = styled.h3`
  border-top: 1px solid #ddd;
  padding-top: 30px;
  margin-bottom: 15px;
  font-weight: 500;
`;
export const ModalWaringsInfo = styled.p`
  margin-bottom: 10px;
  padding-left: 10px;
`;
