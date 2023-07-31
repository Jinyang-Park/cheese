import React, { useEffect, useState } from 'react';
import CommonStyles from '../../utils/CommonStyles';
import Storeimg from '../../public/assets/Storeimg.jpg';
import axios from 'axios';
import styled from 'styled-components';

function Location() {
  const [Data, setData] = useState([]);

  const fetchStoreInformations = async () => {
    try {
      const { data } = await axios.get('/api');
      console.log(data);
      setData(data);
      console.log(Data);
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      console.log(message);
    }
    console.log(Data);
  };

  useEffect(() => {
    fetchStoreInformations();
  }, []);

  return (
    <>
      <CommonStyles>
        <LocationSection>
          <LocationTxt>매장안내</LocationTxt>
          <LocationvView>
            <LocationImgSection>
              <LocationImfor1>
                {/* {Data.map((post) => {
                  return <div>{post.Title}</div>;
                })} */}
                <LocationImg src={Storeimg} />
              </LocationImfor1>
              <LocationImfor2>{/* <Map /> */}</LocationImfor2>
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
  padding-top: 60px;
`;

export const LocationTxt = styled.h1`
  padding-top: 100px;
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
  margin: 0 0 15px 0;
  width: 500px;
  overflow: hidden;
`;
export const LocationImfor1 = styled.div`
  float: left;
`;
export const LocationImg = styled.img`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
export const LocationImfor2 = styled.div``;
