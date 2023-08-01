import React, { useEffect, useState } from 'react';
import CommonStyles from '../../utils/CommonStyles';
import Storeimg from '../../public/assets/Storeimg.jpg';
import styled from 'styled-components';
import InformationApi from '../../components/Location/InformationApi';
import Map from '../../components/Location/Map';

function Location() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      Headers: { 'Content-Type': 'application/json' },
      redirect: 'follow',
    };
    fetch('http://localhost:5000/api', requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // axios로 server에서 json 자동 변환에서 에러가 뜨고 막혀서 json파일을 따로 만들어서 fetch 방법을 사용함
  // const fetchStoreInformations = async () => {
  //   try {
  //     const { data } = await axios.get('http://localhost:5000/api');
  //     console.log(data);
  //     setData(data);
  //   } catch (error) {
  //     let message = 'Unknown Error';
  //     if (error instanceof Error) message = error.message;
  //     console.log(message);
  //   }
  // };

  // useEffect(() => {
  //   fetchStoreInformations();
  // }, []);

  return (
    <>
      <CommonStyles>
        <LocationSection>
          <LocationTxt>매장안내</LocationTxt>
          <LocationvView>
            <LocationImfor>
              {Data.map((post) => {
                return <InformationApi key={post.id} post={post} />;
              })}
            </LocationImfor>
            <LocationImgSection>
              <LocationImfor1>
                <LocationImg src={Storeimg} />
              </LocationImfor1>
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
  display: flex;
  margin: 0 0 15px 0;
  /* width: 500px; */
  overflow: hidden;
`;
export const LocationImfor = styled.div`
  /* display: flex; */
`;

export const LocationImfor1 = styled.div`
  float: left;
`;
export const LocationImg = styled.img`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 95%;
  height: 100%;
  margin-right: 10px;
  object-fit: contain;
`;
export const LocationImfor2 = styled.div`
  width: 110%;
  float: right;
  height: 100%;
`;
