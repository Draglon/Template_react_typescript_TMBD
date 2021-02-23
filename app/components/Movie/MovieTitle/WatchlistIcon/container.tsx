import * as React from 'react';
import { connect } from 'react-redux';

import { addToWatchlistRequest as addToWatchlistRequestAction } from '../../../../store/theMovieDB/watchlist/actions';

import WatchlistIconComponent from './component';

interface Props {
  watchlist: any,
  movieId: string,
  addToWatchlistRequest(params: object): void
}

interface State {}

class WatchlistIconContainer extends React.Component<Props, State> {
  handleWatchlist = () => {
    const { addToWatchlistRequest, watchlist, movieId } = this.props;
    addToWatchlistRequest({ movieId, watchlist: !watchlist });
  };

  render = () => (
    <WatchlistIconComponent
      {...this.props}
      onWatchlist={this.handleWatchlist}
    />
  )
}

const mapDispatchToProps = {
  addToWatchlistRequest: addToWatchlistRequestAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(WatchlistIconContainer);
