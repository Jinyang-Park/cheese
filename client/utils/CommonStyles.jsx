import styled from 'styled-components';
import React from 'react';

function CommonStyles({ children }) {
  return <CommonStyle>{children}</CommonStyle>;
}

export default CommonStyles;

const CommonStyle = styled.div`
  max-width: 1366px;
  margin: 0 auto;
`;
