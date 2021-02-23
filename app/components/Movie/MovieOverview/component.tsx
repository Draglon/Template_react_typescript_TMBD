import * as React from 'react';
import { Row, Col, Typography } from 'antd';

interface Props {
  title: string,
  overview: string,
}

const MovieOverviewComponent = ({ title, overview }: Props) => (
  <Row className="top-margin">
    <Col span={20} offset={2}>
      <Typography.Title level={3}>{title}</Typography.Title>
      <Typography.Paragraph className="movie__text">{overview}</Typography.Paragraph>
    </Col>
  </Row>
);

export default MovieOverviewComponent;
