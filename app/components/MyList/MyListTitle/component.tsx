import * as React from 'react';
import { Typography, Row, Col } from 'antd';

import DeleteItemModal from '../../../shared/modal/DeleteItemModal';

interface ModalParams {
  title: string,
  onConfirm(): void,
}

interface Props {
  myList: any,
  modalParams: ModalParams,
}

const MyListsTitleComponent = ({
  myList,
  modalParams,
}: Props) => (
  <Row>
    <Col offset={2} span={20}>
      <div className="top-margin">
        <Typography.Title>
          {myList.title}{' '}
          <DeleteItemModal
            title={modalParams.title}
            onConfirm={modalParams.onConfirm}
            type="minus-circle"
          />
        </Typography.Title>
      </div>
    </Col>
  </Row>
);

export default MyListsTitleComponent;
