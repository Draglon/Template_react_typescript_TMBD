import * as React from 'react';
import { connect } from 'react-redux';

import { createdListsRequest as createdListsRequestAction } from '../../store/theMovieDB/myLists/actions';
import { getCreatedLists } from '../../store/theMovieDB/myLists/selectors';

import MyListsComponent from './component';

interface CreatedListsRequestParams {
  page: number
}

interface Props {
  myLists: any,
  createdListsRequest(params: CreatedListsRequestParams): void
}

interface State {
  myLists: any,
}

class MyListsContainer extends React.Component<Props, State> {
  componentDidMount() {
    const { createdListsRequest } = this.props;
    createdListsRequest({ page: 1 });
  }

  handleGetPage = (page: number) => {
    const { createdListsRequest } = this.props;
    createdListsRequest({ page });
  };

  render = () => (
    <MyListsComponent
      {...this.props}
      onGetPage={this.handleGetPage}
    />
  )
}

const mapStateToProps = (state: State) => ({
  myLists: getCreatedLists(state),
});

const mapDispatchToProps = {
  createdListsRequest: createdListsRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyListsContainer);
