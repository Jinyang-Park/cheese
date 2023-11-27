import React from 'react';
import CommonStyles from '../../utils/CommonStyles';
import styled from 'styled-components';
import CakeMain from '../../public/assets/main2.png';
import WeddingCakeSlider from './../../components/Main/WeddingCakeSlider';
import CupCakeSlider from '../../components/Main/CupCakeSlider';
import { CakeList } from '../../common/CakeList';
function Main() {
  return (
    <>
      <MainWrapper>
        <MainImg src={CakeMain} />
      </MainWrapper>
      <CommonStyles>
        <WeddingCakeSlider
          weddings={CakeList.filter((cake) => cake.type === 'cake')}
        />
        <CupCakeSlider
          weddings={CakeList.filter((cake) => cake.type !== 'cake')}
        />
      </CommonStyles>
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
