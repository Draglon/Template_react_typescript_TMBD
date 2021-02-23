import * as React from 'react';
import { connect } from 'react-redux';

import { movieRequest as movieRequestAction } from '../../store/theMovieDB/movie/actions';
import {
  getMovieById,
  getGenresById,
  getCastById,
  getCrewById,
} from '../../store/theMovieDB/movie/selectors';

import MovieComponent from './component';

interface Props {
  match: any,
  movie: any,
  genres: any,
  cast: any,
  crew: any,
  movieRequest(params: object): void
}

interface State {
  movie: any,
  genres: any,
  cast: any,
  crew: any,
}

class MovieContainer extends React.Component<Props, State> {
  componentDidMount() {
    const { movieRequest, match: { params: { id } } } = this.props;

    movieRequest({ movieId: id });
  }

  render = () => <MovieComponent {...this.props} />
}

const mapStateToProps = (state: State, { match: { params: { id } } }: any) => ({
  movie: getMovieById(state, id),
  genres: getGenresById(state, id),
  cast: getCastById(state, id),
  crew: getCrewById(state, id),
});

const mapDispatchToProps = {
  movieRequest: movieRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieContainer);
