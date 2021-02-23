import * as React from 'react';
import { Icon } from 'antd';

interface Props {
  watchlist: any,
  onWatchlist(): void
}

const WatchlistIconComponent = ({ watchlist, onWatchlist }: Props) => (
  <Icon type="heart" theme={watchlist ? 'filled' : undefined} onClick={onWatchlist} />
);

export default WatchlistIconComponent;
