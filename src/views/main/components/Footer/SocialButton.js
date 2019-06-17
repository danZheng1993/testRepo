import React from 'react';
import styled from 'styled-components';

import get from 'lodash.get';

import EmailIcon from "resources/icon-social-email.svg";
import MessengerIcon from "resources/icon-social-messenger.svg";
import TelegramIcon from "resources/icon-social-telegram.svg";
import TwitterIcon from "resources/icon-social-twitter.svg";
import WhatsappIcon from "resources/icon-social-whatsapp.svg";

const Icons = {
  messenger: MessengerIcon,
  email: EmailIcon,
  telegram: TelegramIcon,
  twitter: TwitterIcon,
  whatsapp: WhatsappIcon,
};

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  text-decoration: none;
`;

const Icon = styled.img`
  width: 78px;
  height: 78px;
`;

export const ShareButton = (props) => (
  <Wrapper href={props.buildLink(props.referralLink)} target="_blank">
    <Icon src={get(Icons, props.icon)} />
  </Wrapper>
);
