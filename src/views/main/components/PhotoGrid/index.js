import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import InfiniteLoader from 'react-infinite-loader';

import { getPhotoResult } from 'store/selectors';
import { actionTypes, FetchPhotos } from 'store/actions/photos';

import Photo from './Photo';

const PhotoGridWrapper = styled.div`
  flex: 4;
  height: 100%;
  overflow-y: scroll;
`;

class PhotoGrid extends React.Component {
  onScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    const { status, FetchPhotos } = this.props;
    if (bottom && status !== actionTypes.FETCH_PHOTOS) {
      FetchPhotos();
    }
  }
  renderPhoto = (photo) => {
    return ( <Photo photo={photo} key={`photo_${photo.id}`} /> );
  }
  render() {
    const { photos, status } = this.props;
    return (
      <PhotoGridWrapper onScroll={this.onScroll}>
        {photos.map(this.renderPhoto)}
        { photos.length > 0 && status === actionTypes.FETCH_USERS && (
          <InfiniteLoader visitStyle={{ height: '40px', width: '100%' }} loaderStyle={{ height: '40px', width: '40px', border: '2px solid #c6cfff', borderRight: 'none' }} />
        )}
      </PhotoGridWrapper>
    )
  }
}

const mapStateToProps = (state) => ({ ...getPhotoResult(state), status: state.photos.current_status });
const mapDispatchToProps = { FetchPhotos };

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
