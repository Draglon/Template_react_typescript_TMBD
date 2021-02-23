import * as React from 'react';
import { Row, Col, Typography, Tag } from 'antd';

interface Props {
  genres: any,
  title: string,
}

const MovieGenresComponent = ({ title, genres }: Props) => (
  <Row>
    <Col span={20} offset={2}>
      <Typography.Paragraph className="movie__text">
        <b>{title}: </b>
        {genres.map((item: any) => (
          <Tag key={item.id}>{item.name}</Tag>
        ))}
      </Typography.Paragraph>
    </Col>
  </Row>
);

export default MovieGenresComponent;
