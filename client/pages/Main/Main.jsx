import React from 'react';
import CommonStyles from '../../utils/CommonStyles';
import styled from 'styled-components';
import CakeMain from '../../public/assets/main.png';
function Main() {
  return (
    <>
      <MainWrapper>
        <MainImg src={CakeMain} />
      </MainWrapper>
    </>
  );
}

export default Main;

export const MainWrapper = styled.div`
  position: relative;
  padding-top: 90px;
`;
export const MainImg = styled.img`
  display: block;
  width: 100%;
  height: 90%;
  object-fit: contain;
`;
