import * as React from 'react';
import { connect } from 'react-redux';

import { createListRequest as createListRequestAction } from '../../../store/theMovieDB/myLists/actions';

import CreateListModalComponent from './component';

export interface Props {
  icon: string,
  text: string,
  createListRequest(params: object): void;
}

export interface State {}

class CreateListModalContainer extends React.Component<Props, State> {
  state = {
    modalVisible: false,
  }

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  onSubmit = (values: any, actions: any) => {
    const { createListRequest } = this.props;
    actions.setSubmitting(true);
    createListRequest({ values, actions, hideModal: this.hideModal });
  };

  render = () => (
    <CreateListModalComponent
      {...this.props}
      {...this.state}
      showModal={this.showModal}
      hideModal={this.hideModal}
      onSubmit={this.onSubmit}
    />
  )
}

const mapDispatchToProps = {
  createListRequest: createListRequestAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(CreateListModalContainer);
