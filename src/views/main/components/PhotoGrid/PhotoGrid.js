import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import InfiniteLoader from 'react-infinite-loader';

import { getPhotoResult } from 'store/selectors';
import { actionTypes, FetchPhotos } from 'store/actions/photos';

import Photo from './Photo';
import PhotoEmptyState from './PhotoEmptyState';

const PhotoGridWrapper = styled.div`
  flex: 1;
  width: 100%;
  overflow-y: scroll;
  padding: 16px;
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
    const { photos, status, selectedUser } = this.props;
    if (photos.length === 0) {
      return <PhotoEmptyState selectedUser={selectedUser} />
    }
    return (
      <PhotoGridWrapper onScroll={this.onScroll}>
        {photos.map(this.renderPhoto)}
        { photos.length > 0 && status === actionTypes.FETCH_PHOTOS && (
          <InfiniteLoader visitStyle={{ height: '40px', width: '100%' }} loaderStyle={{ height: '40px', width: '40px', border: '2px solid #c6cfff', borderRight: 'none' }} />
        )}
      </PhotoGridWrapper>
    )
  }
}

const mapStateToProps = (state) => ({ ...getPhotoResult(state), status: state.photos.current_status, selectedUser: state.users.selected_user });
const mapDispatchToProps = { FetchPhotos };

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
