import * as React from 'react';
import { Row, Col, Typography, Card } from 'antd';

import Image from '../../../shared/images/Image';

interface Props {
  movieDetails: any,
  title: string,
}

const MovieDetailsComponent = ({ movieDetails, title }: Props) => (
  <>
    <Row>
      <Col span={10} offset={2} className="top-margin">
        <Typography.Title level={3}>{title}</Typography.Title>
      </Col>
    </Row>
    <Row gutter={8} type="flex">
      <Col span={20} offset={2} className="movie__details">
        {movieDetails.map((item: any) => (
          <Col
            key={item.id}
            xs={{ span: 12 }}
            sm={{ span: 8 }}
            md={{ span: 6 }}
            lg={{ span: 4 }}
            xl={{ span: 4 }}
          >
            <Card
              className="top-margin"
              cover={<Image className="movie-image" path={item.profile_path} alt={item.name} />}
            >
              <Card.Meta title={item.name} description={item.character || item.job} />
            </Card>
          </Col>
        ))}
      </Col>
    </Row>
  </>
);

export default MovieDetailsComponent;
