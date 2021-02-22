import * as React from 'react';
import { Row, Col, Typography } from 'antd';

import MovieList from '../../shared/lists/MovieList';
import Pagination from '../../shared/Pagination';

export interface Favorites {
  page: number,
  totalPages: number,
  results: number,
}

export interface Props {
  favorites: Favorites,
  modalParams: object,
  onGetPage(page: number): void;
}

const FavoritesComponent = ({
  favorites,
  modalParams,
  onGetPage,
}: Props) => (
  favorites && (
    <>
      <Row>
        <Col offset={2} span={20}>
          <div className="top-margin">
            <Typography.Title>Favorites</Typography.Title>
          </div>
        </Col>
      </Row>
      <MovieList movies={favorites.results} modalParams={modalParams} />
      <Pagination currentPage={favorites.page} page={onGetPage} totalPages={favorites.totalPages} />
    </>
  )
);

export default FavoritesComponent;
