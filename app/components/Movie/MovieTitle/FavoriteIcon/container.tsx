import * as React from 'react';
import { connect } from 'react-redux';

import { addToFavoriteRequest as addToFavoriteRequestAction } from '../../../../store/theMovieDB/favorite/actions';

import FavoriteIconComponent from './component';

class FavoriteIconContainer extends React.Component {
  handleFavorite = () => {
    const { addToFavoriteRequest, favorite, movieId } = this.props;
    addToFavoriteRequest({ movieId, favorite: !favorite });
  };

  render() {
    return <FavoriteIconComponent {...this.props} handleFavorite={this.handleFavorite} />;
  }
}

// FavoriteIconContainer.propTypes = {
//   addToFavoriteRequest: PropTypes.func.isRequired,
//   movieId: PropTypes.number.isRequired,
//   favorite: PropTypes.bool.isRequired,
// };

const mapDispatchToProps = {
  addToFavoriteRequest: addToFavoriteRequestAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(FavoriteIconContainer);
