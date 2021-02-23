import * as React from 'react';
import { connect } from 'react-redux';

import { deleteListRequest as deleteListRequestAction } from '../../../store/theMovieDB/myLists/actions';

import ListsComponent from './component';

interface Props {
  lists: any,
  deleteListRequest(): void,
}

interface State {}

class ListsContainer extends React.Component<Props, State> {
  render() {
    const { deleteListRequest } = this.props;
    return <ListsComponent {...this.props} onConfirm={deleteListRequest} />;
  }
}

const mapDispatchToProps = {
  deleteListRequest: deleteListRequestAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(ListsContainer);
