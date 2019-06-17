import React from 'react';
import styled from 'styled-components';

import Copyright from './Copyright';
import SocialIcons from './SocialIcons';

const FooterWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 40px;
  border-top: 1px solid #f3f8ff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <Copyright />
        <SocialIcons
          referralLink="http://localhost:3000/"
          sharingPlatform={["messenger", "twitter", "whatsapp", "telegram", "email"]}
        />
      </FooterWrapper>
    )
  }
}