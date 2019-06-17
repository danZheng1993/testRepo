import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import get from 'lodash.get';

import { getUserResult } from 'store/selectors';
import { UpdateSearchFilter, UserSelected, FetchUsers } from 'store/actions/users';

import UserList from './UserList';

const UserSelectorWrapper = styled.div`
  display: flex;
  flex: 1.5;
  height: 100%;
  flex-direction: column;
  border-right: 1px solid #f3f8ff;
`;

const Input = styled.input`
  margin: 16px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid #c6cfff;
`;

class UserSearch extends React.Component {
  onChangeKeyword = (event) => {
    const keyword = event.target.value;
    this.props.UpdateSearchFilter(keyword);
  }

  onSelect = (user) => {
    this.props.UserSelected(user);
  }

  loadMore = () => {
    this.props.FetchUsers();
  }

  render() {
    const { results, status, selected } = this.props;
    return (
      <UserSelectorWrapper>
        <Input type="text" onChange={this.onChangeKeyword} placeholder="Search user..." />
        <UserList
          users={results}
          status={status}
          selectedId={get(selected, 'id')}
          onSelect={this.onSelect}
          loadMore={this.loadMore}
        />
      </UserSelectorWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  ...getUserResult(state),
  selected: state.users.selected_user,
  status: state.users.current_status,
});

const mapDispatchToProps = { UpdateSearchFilter, UserSelected, FetchUsers };

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
