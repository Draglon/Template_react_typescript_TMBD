import * as React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Row, Col, Card } from 'antd';

import DeleteItemModal from '../../../shared/modal/DeleteItemModal';

interface Props {
  lists: any,
  onConfirm(): void,
}

const ListsComponent = ({ lists, onConfirm }: Props) => (
  <Row gutter={8} type="flex">
    <Col span={20} offset={2} className="lists">
      {lists.map((item: any) => (
        <Col
          key={item.id}
          xs={{ span: 12 }}
          sm={{ span: 8 }}
          md={{ span: 6 }}
          lg={{ span: 4 }}
          xl={{ span: 4 }}
        >
          <Card
            hoverable
            className="top-margin"
            actions={[
              <DeleteItemModal
                title="Do you want to delete list?"
                params={{ listId: item.id }}
                onConfirm={onConfirm}
                type="delete"
              />,
            ]}
          >
            <Link to={`list/${item.id}`}>
              <Typography.Title level={4}>{item.name}</Typography.Title>
              {item.description}
            </Link>
          </Card>
        </Col>
      ))}
    </Col>
  </Row>
);

export default ListsComponent;
