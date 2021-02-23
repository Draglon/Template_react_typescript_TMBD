import * as React from 'react';
import { Icon } from 'antd';

export interface Props {
  type?: string,
  showModal(): void;
}

const DeleteItemModalComponent = ({ type, showModal }: Props) => (
  <Icon key="delete" type={type} onClick={showModal} />
);

export default DeleteItemModalComponent;
