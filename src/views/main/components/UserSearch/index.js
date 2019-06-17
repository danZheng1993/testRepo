import React from 'react';
import { connect } from 'react-redux';

import { getUserResult } from 'store/selectors';
import { UpdateSearchFilter } from 'store/actions/users';

const styles= {
  wrapper: {
    flex: 1,
    height: '100%',
  }
}

class UserSearch extends React.Component {
  onChangeKeyword = (event) => {
    const keyword = event.target.value;
    this.props.UpdateSearchFilter(keyword);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <input type="text" onChange={this.onChangeKeyword} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...getUserResult(state)
});

const mapDispatchToProps = { UpdateSearchFilter };

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
