import * as React from 'react';
import { Row, Col, Typography } from 'antd';

import MovieList from '../../shared/lists/MovieList';
import Pagination from '../../shared/Pagination';

interface Watchlist {
  page: number,
  totalPages: number,
  results: number,
}

interface ModalParams {
  title: string,
  params: object,
  onConfirm(): void,
}

interface Props {
  watchlist: Watchlist,
  modalParams: ModalParams,
  onGetPage(page: number): void;
}

const WatchlistComponent = ({
  watchlist,
  onGetPage,
  modalParams,
}: Props) => watchlist && (
  <>
    <Row>
      <Col offset={2} span={20}>
        <div className="top-margin">
          <Typography.Title>Watchlist</Typography.Title>
        </div>
      </Col>
    </Row>
    <MovieList movies={watchlist.results} modalParams={modalParams} />
    <Pagination currentPage={watchlist.page} page={onGetPage} totalPages={watchlist.totalPages} />
  </>
);

export default WatchlistComponent;
