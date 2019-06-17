import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { UpdateOrder } from 'store/actions/photos';

const PhotoFilterWrapper = styled.div`
  height: 60px;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 60px;
`;

class PhotoGrid extends React.Component {
  onChange = (evt) => {
    const orderBy = evt.target.value;
    this.props.UpdateOrder(orderBy);
  }
  render() {
    const { orderBy } = this.props;
    return (
      <PhotoFilterWrapper>
        Order By: <select value={orderBy} onChange={this.onChange}>
          <option value="latest">Latest</option>
          <option value="popular">Popular</option>
          <option value="oldest">Oldest</option>
        </select>
      </PhotoFilterWrapper>
    )
  }
}

const mapStateToProps = (state) => ({ orderBy: state.photos.orderBy });
const mapDispatchToProps = { UpdateOrder };

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
