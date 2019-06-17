import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  padding: 16px;
  border-bottom: 1px solid #ececec;
  cursor: pointer;
  &.selected {
    background-color: #f3f8ff;
  }
  &:hover {
    background-color: #f3f8ff;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Img = styled.img`
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border: 3px solid white;
  border-radius: 24px;
  -webkit-box-shadow: 3px 3px 9px 0px rgba(0,0,0,0.43);
  -moz-box-shadow: 3px 3px 9px 0px rgba(0,0,0,0.43);
  box-shadow: 3px 3px 9px 0px rgba(0,0,0,0.43);
`;

const InfoContainer = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Name = styled.a`
  color: #e86ed0;
`;

const Stats = styled.div`
  font-size: 0.8rem;
  color: #b1e8ed;
  margin-right: 20px;
`;

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export default class User extends React.Component {
  render() {
    const { user, selected } = this.props;
    return (
      <ItemWrapper className={selected && 'selected'} onClick={this.props.onClick}>
        <Img src={user.profile_image.medium} />
        <InfoContainer>
          <Name href={user.portfolio_url} target="_blank">{user.first_name} {user.last_name}</Name>
          <StatsWrapper>
            <Stats>Likes: {user.total_likes}</Stats>
            <Stats>Photos: {user.total_photos}</Stats>
          </StatsWrapper>
        </InfoContainer>
      </ItemWrapper>
    )
  }
}