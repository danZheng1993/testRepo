import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  padding: 16px;
  border-bottom: 1px solid #ececec;
  cursor: pointer;
  &:hover {
    background-color: #f3f8ff;
  }
`;

export default class User extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <ItemWrapper onClick={this.props.onClick}>
        {user.username}
      </ItemWrapper>
    )
  }
}