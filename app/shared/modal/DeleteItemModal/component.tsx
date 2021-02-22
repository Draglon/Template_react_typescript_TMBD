import * as React from 'react';
import { Icon } from 'antd';

const DeleteItemModalComponent = ({ type, showModal }) => (
  <Icon key="delete" type={type} onClick={showModal} />
);

// DeleteItemModalComponent.defaultTypes = {
//   type: null,
// };

// DeleteItemModalComponent.propTypes = {
//   type: PropTypes.string,
//   showModal: PropTypes.func.isRequired,
// };

export default DeleteItemModalComponent;
