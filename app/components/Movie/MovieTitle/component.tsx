import * as React from 'react';
import { Row, Col, Typography } from 'antd';

import Popover from './Popover';
import WatchlistIcon from './WatchlistIcon';
import FavoriteIcon from './FavoriteIcon';

interface Movie {
  id: string,
  title: string,
  watchlist: any,
  favorite: any,
}

interface Props {
  movie: Movie,
}

const MovieTitleComponent = ({ movie }: Props) => (
  <Row className="top-margin">
    <Col span={20} offset={2}>
      <Typography.Title>
        <span>{movie.title}</span> <Popover movieId={movie.id} />{' '}
        <WatchlistIcon movieId={movie.id} watchlist={movie.watchlist} />{' '}
        <FavoriteIcon movieId={movie.id} favorite={movie.favorite} />
      </Typography.Title>
    </Col>
  </Row>
);

export default MovieTitleComponent;
