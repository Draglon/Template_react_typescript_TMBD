import * as React from 'react';
import { connect } from 'react-redux';

import {
  watchlistRequest as watchlistRequestAction,
  addToWatchlistRequest as addToWatchlistRequestAction,
} from '../../store/theMovieDB/watchlist/actions';
import { getWatchlist } from '../../store/theMovieDB/watchlist/selectors';

import WatchlistComponent from './component';

interface Watchlist {
  page: number,
  totalPages: number,
  results: number,
}

interface WatchlistRequestParams {
  page: number
}

interface Props {
  watchlist: Watchlist
  watchlistRequest(params: WatchlistRequestParams): void
  addToWatchlistRequest(): void
}

interface State {
  watchlist: Watchlist
}

class WatchlistContainer extends React.Component<Props, State> {
  componentDidMount() {
    const { watchlistRequest } = this.props;
    watchlistRequest({ page: 1 });
  }

  handleGetPage = (page: number) => {
    const { watchlistRequest } = this.props;
    watchlistRequest({ page });
  };

  render() {
    const { addToWatchlistRequest } = this.props;
    return (
      <WatchlistComponent
        {...this.props}
        onGetPage={this.handleGetPage}
        modalParams={{
          title: 'Do you want to delete movie from watchlist?',
          params: { watchlist: false },
          onConfirm: addToWatchlistRequest,
        }}
      />
    );
  }
}

const mapStateToProps = (state: State) => ({
  watchlist: getWatchlist(state),
});

const mapDispatchToProps = {
  watchlistRequest: watchlistRequestAction,
  addToWatchlistRequest: addToWatchlistRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WatchlistContainer);
