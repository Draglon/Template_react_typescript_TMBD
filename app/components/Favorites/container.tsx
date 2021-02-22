import * as React from 'react';
import { connect } from 'react-redux';

import {
  favoriteRequest as favoriteRequestAction,
  addToFavoriteRequest as addToFavoriteRequestAction,
} from '../../store/theMovieDB/favorite/actions';
import { getFavorite } from '../../store/theMovieDB/favorite/selectors';

import FavoritesComponent from './component';

export interface Favorites {
  page: number,
  totalPages: number,
  results: number,
}

interface FavoriteRequestParams {
  page: number
}

interface Props {
  favorites: Favorites
  favoriteRequest(params: FavoriteRequestParams): void
  addToFavoriteRequest(): void
}

interface State {
  favorites: Favorites
}

class FavoritesContainer extends React.Component<Props, State> {
  componentDidMount() {
    const { favoriteRequest } = this.props;
    favoriteRequest({ page: 1 });
  }

  handleGetPage = (page: number) => {
    const { favoriteRequest } = this.props;
    favoriteRequest({ page });
  };

  render() {
    const { addToFavoriteRequest } = this.props;
    return (
      <FavoritesComponent
        {...this.props}
        onGetPage={this.handleGetPage}
        modalParams={{
          title: 'Do you want to delete movie from favorites?',
          params: { favorite: false },
          onConfirm: addToFavoriteRequest,
        }}
      />
    );
  }
}

const mapStateToProps = (state: State) => ({
  favorites: getFavorite(state),
});

const mapDispatchToProps = {
  favoriteRequest: favoriteRequestAction,
  addToFavoriteRequest: addToFavoriteRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoritesContainer);
