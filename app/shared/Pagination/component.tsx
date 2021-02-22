import * as React from 'react';
import { Row, Col, Pagination } from 'antd';

export interface Props {
  totalPages: number,
  currentPage: number,
  page(page: number): void;
}

const PaginationComponent = ({
  page,
  currentPage,
  totalPages,
}: Props) => (
  totalPages > 1 && (
    <Row type="flex" justify="center" className="top-padding">
      <Col>
        <Pagination
          className="pagination"
          defaultCurrent={1}
          current={currentPage}
          total={totalPages * 10}
          onChange={page}
        />
      </Col>
    </Row>
  )
);

export default PaginationComponent;
