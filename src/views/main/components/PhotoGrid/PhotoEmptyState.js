import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #e8d3ff;
`;

export default ({ selectedUser }) => (
  <Wrapper>
    {
      selectedUser && selectedUser.total_photos === 0 ?
        "No Photo for this user" : selectedUser ? "Loading ..." : "Please select a user to see a list of photos"
    }
  </Wrapper>
)