import React from 'react';
import styled from 'styled-components';
import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';

function InformationApi({ post }) {
  return (
    <>
      <InformationTitle>{post.Title}</InformationTitle>
      <Informationli>
        <Inforarray>
          <InformationCall />
          전화번호
        </Inforarray>
        <InformationNumber>{post.Number}</InformationNumber>
      </Informationli>
      <Informationli>
        <Inforarray>
          <InformationLoaction />
          주소
        </Inforarray>
        <InformationAddress>{post.Address}</InformationAddress>
      </Informationli>
      <Informationli>
        <Inforarray>
          <Informationclock />
          영업 시간
        </Inforarray>
        <InformationTime>{post.Time}</InformationTime>
      </Informationli>
      <div>{post.Time2}</div>
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
`;
export const Inforarray = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
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
