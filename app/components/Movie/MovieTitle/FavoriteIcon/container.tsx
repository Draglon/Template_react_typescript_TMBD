import * as React from 'react';
import { connect } from 'react-redux';

import { addToFavoriteRequest as addToFavoriteRequestAction } from '../../../../store/theMovieDB/favorite/actions';

import FavoriteIconComponent from './component';

interface Props {
  favorite: any,
  movieId: string,
  addToFavoriteRequest(params: object): void
}

interface State {}

class FavoriteIconContainer extends React.Component<Props, State> {
  handleFavorite = () => {
    const { addToFavoriteRequest, favorite, movieId } = this.props;
    addToFavoriteRequest({ movieId, favorite: !favorite });
  };

  render = () => (
    <FavoriteIconComponent
      {...this.props}
      onFavorite={this.handleFavorite}
    />
  )
}

const mapDispatchToProps = {
  addToFavoriteRequest: addToFavoriteRequestAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(FavoriteIconContainer);
