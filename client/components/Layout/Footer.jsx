import React from 'react';
import styled from 'styled-components';
import CommonStyles from '../../utils/CommonStyles';
function Footer() {
  return (
    <FooterWrapper>
      <CommonStyles>
        <FooterTxtWrapper>
          <FooterTxtdiv>
            <CompanyTitle>
              회사명: 아뜰리에 치즈본(주식회사 치즈본)
            </CompanyTitle>
            <CompanyBoss>대표이사: 변니스들</CompanyBoss>
            <CompanyAddress>주소: 청주시 서원구 천석로 14번길 1</CompanyAddress>
          </FooterTxtdiv>
          <CommpanyCopyright>
            Copyright ⓒ 2023 Cheesbon. All Rigths Reserved.
          </CommpanyCopyright>
        </FooterTxtWrapper>
      </CommonStyles>
    </FooterWrapper>
  );
}

export default Footer;
export const FooterWrapper = styled.div`
  border-top: 2px solid #ebebeb;
`;
export const FooterTxtWrapper = styled.div`
  padding-bottom: 30px;
`;
export const FooterTxtdiv = styled.div`
  display: flex;
  padding: 40px 20px 20px 20px;
`;
export const CompanyTitle = styled.h3`
  font-weight: 500;
  color: #b9b9ba;
`;
export const CompanyBoss = styled.h3`
  font-weight: 500;
  color: #b9b9ba;

  &::before {
    content: '| ';
    vertical-align: 1px;
    margin: 0 30px;
  }
`;
export const CompanyAddress = styled.h3`
  font-weight: 500;
  color: #b9b9ba;

  &::before {
    content: '| ';
    vertical-align: 1px;
    margin: 0 30px;
  }
`;
export const CommpanyCopyright = styled.h3`
  font-weight: 500;
  color: #b9b9ba;
  padding: 0px 0px 0px 20px;
`;
