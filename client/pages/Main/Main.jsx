import React, { useEffect } from 'react';
import CommonStyles from '../../utils/CommonStyles';
import styled from 'styled-components';
import CakeMain from '../../public/assets/main2.webp';
import WeddingCakeSlider from './../../components/Main/WeddingCakeSlider';
import CupCakeSlider from '../../components/Main/CupCakeSlider';
import { CakeList } from '../../common/CakeList';
function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MainWrapper>
        <MainImg src={CakeMain} />
      </MainWrapper>
      <CommonStyles>
        <SliderWapper>
          <WeddingCakeSlider
            cakes={CakeList.filter((wedding) => wedding.type === 'cake')}
          />
          <CupCakeSlider
            cakes={CakeList.filter((wedding) => wedding.type !== 'cake')}
          />
        </SliderWapper>
      </CommonStyles>
    </>
  );
}

export default Main;

export const MainWrapper = styled.div`
  position: relative;
  padding-top: 90px;
  @media screen and (max-width: 1200px) {
    padding-top: 65px;
  }
  @media screen and (max-width: 600px) {
    padding-top: 65px;
  }
  @media screen and (max-width: 480px) {
    padding-top: 65px;
  }
`;
export const MainImg = styled.img`
  display: block;
  width: 100%;
  height: 90%;
  object-fit: contain;
`;
export const SliderWapper = styled.div`
  margin-bottom: 220px;
`;
