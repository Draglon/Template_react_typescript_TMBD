import * as React from 'react';
import { Row, Col, Carousel } from 'antd';

import Image from '../../../shared/images/Image';

interface Props {
  backdrops: any,
  title: string,
}

const MovieCarouselComponent = ({ backdrops, title }: Props) => (
  <Row type="flex">
    <Col span={24}>
      <Carousel autoplay>
        {backdrops.map((item: any, index: number) => (
          <div key={index}>
            <Image className="movie-image" path={item.file_path} alt={title} />
          </div>
        ))}
      </Carousel>
    </Col>
  </Row>
);

export default MovieCarouselComponent;
