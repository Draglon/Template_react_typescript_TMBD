import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteListRequest as deleteListRequestAction } from '../../../store/theMovieDB/myLists/actions';

import MyListsTitleComponent from './component';

interface DeleteListRequestParams {
  listId: string,
}

interface Props extends RouteComponentProps<any, any> {
  myList: any,
  history: any,
  deleteListRequest(params: DeleteListRequestParams): void
}

interface State {
  myList: any,
}

class MyListsTitleContainer extends React.Component<Props, State> {
  redirectToLists = () => {
    const { history } = this.props;

    return history.push('/myLists');
  };

  onConfirm = () => {
    const { deleteListRequest, myList } = this.props;

    deleteListRequest({ listId: myList.id });
    this.redirectToLists();
  };

  render = () => (
    <MyListsTitleComponent
      {...this.props}
      modalParams={{
        title: 'Do you want to delete list?',
        onConfirm: this.onConfirm,
      }}
    />
  )
}

const mapDispatchToProps = {
  deleteListRequest: deleteListRequestAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(MyListsTitleContainer));
