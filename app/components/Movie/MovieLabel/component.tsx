import * as React from 'react';
import { Row, Col, Typography } from 'antd';

const MovieLabelComponent = ({ title, text }) => (
  <Row>
    <Col span={20} offset={2}>
      <Typography.Paragraph className="movie__text">
        <b>{title}: </b>
        <span>{text}</span>
      </Typography.Paragraph>
    </Col>
  </Row>
);

// MovieLabelComponent.propTypes = {
//   title: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
// };

export default MovieLabelComponent;
