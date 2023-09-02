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
                      {cake.description.map((list) => {
                        return (
                          <>
                            <ModalLi key={list.id}>{list.number}</ModalLi>
                            <Modallip>{list.content}</Modallip>
                          </>
                        );
                      })}
                    </ModalUl>
                    <ModalWarings>{cake.warnings}</ModalWarings>
                    {cake.warningsdescription.map((list) => {
                      return (
                        <>
                          <ModalWaringsInfo>{list}</ModalWaringsInfo>
                        </>
                      );
                    })}
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
                      {cup.description.map((list) => {
                        return (
                          <>
                            <ModalLi key={list.id}>{list.number}</ModalLi>
                            <Modallip>{list.content}</Modallip>
                          </>
                        );
                      })}
                    </ModalUl>
                    <ModalWarings>{cup.warnings}</ModalWarings>
                    {cup.warningsdescription.map((list) => {
                      return (
                        <>
                          <ModalWaringsInfo>{list}</ModalWaringsInfo>
                        </>
                      );
                    })}
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
  padding-bottom: 50px;
`;
export const ModalTitle = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
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
  max-width: 550px;
  height: calc(100% - 80px);
  margin: 0 auto;
  margin-top: 110px;
`;
export const ModalUl = styled.ul`
  margin-top: 50px;
  padding-bottom: 30px;
`;
export const ModalLi = styled.li`
  background-color: #f1e5a8;
  float: left;
  width: 20px;
  height: 20px;
  border-radius: 100px;
  /* display: inline-block; */
  text-align: center;
  font-size: 1rem;
  line-height: 20px;
`;
export const Modallip = styled.p`
  line-height: 20px;
  padding-left: 40px;
  margin-bottom: 20px;
`;
export const ModalWarings = styled.h3`
  border-top: 1px solid #ddd;
  padding-top: 30px;
  margin-bottom: 15px;
  font-weight: 600;
`;
export const ModalWaringsInfo = styled.p`
  margin-bottom: 10px;
  font-size: 15px;
  padding-left: 10px;
  letter-spacing: -0.75px;

  &::before {
    content: '-';
    margin-left: -10px;
    margin-right: 5px;
  }
`;
