import * as React from 'react';
import { Row, Col, Typography } from 'antd';

interface Props {
  title: string,
  text: string,
}

const MovieLabelComponent = ({ title, text }: Props) => (
  <Row>
    <Col span={20} offset={2}>
      <Typography.Paragraph className="movie__text">
        <b>{title}: </b>
        <span>{text}</span>
      </Typography.Paragraph>
    </Col>
  </Row>
);

export default MovieLabelComponent;
