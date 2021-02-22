import * as React from 'react';
import { Icon } from 'antd';

const WatchlistIconComponent = ({ watchlist, handleWatchlist }) => (
  <Icon type="heart" theme={watchlist ? 'filled' : undefined} onClick={handleWatchlist} />
);

// WatchlistIconComponent.propTypes = {
//   handleWatchlist: PropTypes.func.isRequired,
//   watchlist: PropTypes.bool.isRequired,
// };

export default WatchlistIconComponent;
