import * as React from 'react';
import { Modal } from 'antd';

import DeleteItemModalComponent from './component';

class DeleteItemModalContainer extends React.Component {
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

  render() {
    return <DeleteItemModalComponent {...this.props} showModal={this.showModal} />;
  }
}

// DeleteItemModalContainer.defaultProps = {
//   params: null,
// };

// DeleteItemModalContainer.propTypes = {
//   title: PropTypes.string.isRequired,
//   params: PropTypes.object,
//   onConfirm: PropTypes.func.isRequired,
// };

export default DeleteItemModalContainer;
