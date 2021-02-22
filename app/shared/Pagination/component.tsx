import * as React from 'react';
import { Row, Col, Pagination } from 'antd';

const PaginationComponent = ({
  page,
  currentPage,
  totalPages,
}) => (
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

// PaginationComponent.propTypes = {
//   page: PropTypes.func.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   totalPages: PropTypes.number.isRequired,
// };

export default PaginationComponent;
