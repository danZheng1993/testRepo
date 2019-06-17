import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  width: 100%;
  padding: 40px;
  border-top: 1px solid #f3f8ff;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>Footer</FooterWrapper>
    )
  }
}