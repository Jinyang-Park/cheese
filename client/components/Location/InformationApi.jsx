import React from 'react';
import styled from 'styled-components';
import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import CheeseInformation from '../../../CheeseInformation.json';

function InformationApi() {
  return (
    <>
      <InformationTitle>{CheeseInformation[0].Title}</InformationTitle>
      <Informationli>
        <Inforarray>
          <InformationCall />
          전화번호
        </Inforarray>
        <InformationNumber>{CheeseInformation[0].Number}</InformationNumber>
      </Informationli>
      <Informationli>
        <Inforarray>
          <InformationLoaction />
          주소
        </Inforarray>
        <InformationAddress>{CheeseInformation[0].Address}</InformationAddress>
      </Informationli>
      <Informationli>
        <Inforarray>
          <Informationclock />
          영업 시간
        </Inforarray>
        <InformationTime>{CheeseInformation[0].Time}</InformationTime>
      </Informationli>
      <div>{CheeseInformation[0].Time2}</div>
    </>
  );
}

export default InformationApi;
export const InformationTitle = styled.h3`
  line-height: 1;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 20px;
  display: inline-block;
  @media screen and (max-width: 1400px) {
    margin-top: 50px;
  }
`;
export const Inforarray = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  @media screen and (max-width: 1400px) {
    justify-content: center;
  }
`;

export const InformationCall = styled(IoCallOutline)`
  font-size: 15px;
  margin-right: 5px;
  color: #9e9e9e;
`;
export const InformationLoaction = styled(IoLocationOutline)`
  font-size: 15px;
  margin-right: 5px;
  color: #9e9e9e;
`;
export const Informationclock = styled(AiOutlineClockCircle)`
  font-size: 15px;
  margin-right: 5px;
  color: #9e9e9e;
`;
export const Informationli = styled.li`
  color: #999;
  margin-bottom: 20px;
  line-height: 1.4;
  list-style: none;
  font-size: 14px;
`;
export const InforNumber = styled.p`
  color: #282828;
  font-size: 16px;
`;
export const InformationAddress = styled.p`
  color: #282828;
  font-size: 16px;
`;
export const InformationTime = styled.div`
  color: #282828;
  font-size: 16px;
`;
export const InformationNumber = styled.div`
  color: #282828;
  font-size: 16px;
`;
