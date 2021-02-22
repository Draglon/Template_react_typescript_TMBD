import * as React from 'react';
import { Row, Col, Empty } from 'antd';

import MovieItem from './MovieItem';
import DeleteItemModal from '../../modal/DeleteItemModal';

export interface ModalParams {
  title: string,
  params: object,
  onConfirm(): void,
}

export interface Props {
  movies: any,
  modalParams: ModalParams,
}

const MovieListComponent = ({ movies, modalParams }: Props) => (
  <Row className="top-padding" type="flex" gutter={16}>
    <Col className="cards" span={20} offset={2}>
      {movies.length !== 0 && (
        <>
          {movies.map((item: any) => (
            <Col
              key={item.id}
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              xl={{ span: 4 }}
            >
              <MovieItem
                item={item}
                actions={
                  modalParams && [
                    <DeleteItemModal
                      title={modalParams.title}
                      params={{ movieId: item.id, ...modalParams.params }}
                      onConfirm={modalParams.onConfirm}
                      type="delete"
                    />,
                  ]
                }
              />
            </Col>
          ))}
        </>
      )}
      {movies.length === 0 && (
        <Empty
          className="cards__empty"
          description="No movies found"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      )}
    </Col>
  </Row>
);

export default MovieListComponent;
