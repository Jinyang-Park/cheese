import React, { useEffect, useState } from 'react';
import CommonStyles from '../../utils/CommonStyles';
import Storeimg from '../../public/assets/Storeimg.jpg';
import styled from 'styled-components';
import InformationApi from '../../components/Location/InformationApi';
import Map from '../../components/Location/Map';

function Location() {
  return (
    <>
      <CommonStyles>
        <LocationSection>
          <LocationTxt>매장안내</LocationTxt>
          <LocationTxt>매장안내</LocationTxt>
                    <LocationTxt>매장안내</LocationTxt>
          <LocationvView>
            <LocationImgSection>
              <LocationWrap>
                <LocationImfor1>
                  <LocationImg src={Storeimg} />
                </LocationImfor1>
                <LocationImfor>
                  <InformationApi />
                </LocationImfor>
              </LocationWrap>
              <LocationImfor2>
                <Map />
              </LocationImfor2>
            </LocationImgSection>
          </LocationvView>
        </LocationSection>
      </CommonStyles>
    </>
  );
}

export default Location;

export const LocationSection = styled.section`
  position: relative;
  min-height: calc(100vh - 161px);
  margin-bottom: 120px;
  /* padding-top: 60px; */
`;
export const LocationWrap = styled.div`
  display: flex;
  padding-bottom: 50px;
  @media screen and (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const LocationTxt = styled.h1`
  padding-top: 200px;
  margin: 0 0 100px;
  text-align: center;
  font-size: 1.75em;
  font-weight: 500;
  letter-spacing: 0;
`;
export const LocationvView = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;
export const LocationImgSection = styled.div`
  /* display: flex; */
  margin: 0 0 15px 0;
  /* width: 500px; */
  overflow: hidden;
`;
export const LocationImfor = styled.div`
  width: calc(100% - 300px);
  @media screen and (max-width: 1400px) {
    display: contents;
  }
`;

export const LocationImfor1 = styled.div`
  width: 500px;
  margin: 0 50px 0px 0;
  position: relative;
  /* padding-top: 100%;
  overflow: hidden; */
  float: left;
  @media screen and (max-width: 1400px) {
    width: 600px;
    display: flex;
    justify-content: center;
    margin: 0px;
    float: none;
  }
`;
export const LocationImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  @media screen and (max-width: 756px) {
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    width: 60%;
  }
`;
export const LocationImfor2 = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;
