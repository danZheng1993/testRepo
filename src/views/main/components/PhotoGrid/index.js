import React from 'react';
import { connect } from 'react-redux';

import { getPhotoResult } from 'store/selectors';

import Photo from './Photo';

const styles= {
  wrapper: {
    flex: 4,
    height: '100%',
    overflowY: 'scroll',
  }
}

class PhotoGrid extends React.Component {
  renderPhoto = (photo) => {
    return ( <Photo photo={photo} key={`photo_${photo.id}`} /> );
  }
  render() {
    const { photos } = this.props;
    return (
      <div style={styles.wrapper}>
        {photos.map(this.renderPhoto)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ ...getPhotoResult(state) });

export default connect(mapStateToProps)(PhotoGrid);
