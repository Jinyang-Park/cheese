import React from 'react';
import styled from 'styled-components';

function InformationApi({ post }) {
  console.log(post);
  return (
    <>
      <InformationTitle>{post.Title}</InformationTitle>
      <InformationNumber>{post.Number}</InformationNumber>
      <InformationAddress>{post.Address}</InformationAddress>
      <InformationTime>{post.Time}</InformationTime>
    </>
  );
}

export default InformationApi;
export const InformationTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  margin-right: 20px;
  display: inline-block;
`;
export const InforNumber = styled.div``;
export const InformationAddress = styled.div``;
export const InformationTime = styled.div``;
export const InformationNumber = styled.div``;
