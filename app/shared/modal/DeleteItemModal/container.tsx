import * as React from 'react';
import { Modal } from 'antd';

import DeleteItemModalComponent from './component';

export interface Props {
  type: string,
  title: string,
  params: object,
  onConfirm(params: object): void;
}

export interface State {}

class DeleteItemModalContainer extends React.Component<Props, State> {
  onOk = () => {
    const { params, onConfirm } = this.props;
    onConfirm(params);
  };

  showModal = () => {
    const { title } = this.props;
    Modal.confirm({
      title,
      onOk: this.onOk,
    });
  };

  render = () => (
    <DeleteItemModalComponent
      {...this.props}
      showModal={this.showModal}
    />
  )
}

export default DeleteItemModalContainer;
