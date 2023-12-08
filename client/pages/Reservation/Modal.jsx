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
  @media screen and (max-width: 1024px) {
    /* padding-bottom: 0px; */
    width: 50%;
  }
  @media screen and (max-width: 720px) {
    padding-bottom: 10px;
  }
  @media screen and (max-width: 480px) {
    width: 70%;
    padding-bottom: 10px;
    min-height: 0px;
  }
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
  @media screen and (max-width: 720px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
export const ModalcloseBtn = styled(GrClose)`
  width: 30px;
  height: 30px;
  font-size: 0;
  position: absolute;
  top: 25px;
  right: 30px;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
    top: 28px;
    right: 25px;
  }
`;
export const ModalReserveInfo = styled.div`
  width: 90%;
  max-width: 550px;
  height: calc(100% - 80px);
  margin: 0 auto;
  margin-top: 110px;
  @media screen and (max-width: 720px) {
    margin-top: 80px;
  }
`;
export const ModalUl = styled.ul`
  margin-top: 50px;
  padding-bottom: 30px;
  @media screen and (max-width: 970px) {
    /* padding-bottom: 0px; */
    padding-bottom: 30px;
  }
  @media screen and (max-width: 720px) {
    padding-bottom: 0px;
  }
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
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
export const Modallip = styled.p`
  line-height: 20px;
  padding-left: 40px;
  margin-bottom: 20px;
  @media screen and (max-width: 970px) {
    /* padding-bottom: 0px; */
    font-size: 14px;
  }
  @media screen and (max-width: 720px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    padding-left: 30px;
  }
`;
export const ModalWarings = styled.h3`
  border-top: 1px solid #ddd;
  padding-top: 30px;
  margin-bottom: 15px;
  font-weight: 600;
  @media screen and (max-width: 970px) {
    font-size: 14px;
  }
  @media screen and (max-width: 720px) {
    font-size: 14px;
    padding-top: 10px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
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
  @media screen and (max-width: 1024x) {
    font-size: 12px;
  }
  @media screen and (max-width: 970px) {
    font-size: 12px;
  }
  @media screen and (max-width: 720px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;
