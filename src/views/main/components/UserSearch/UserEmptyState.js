import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #e8d3ff;
`

export default () => (
  <Wrapper>
    User not found
  </Wrapper>
)