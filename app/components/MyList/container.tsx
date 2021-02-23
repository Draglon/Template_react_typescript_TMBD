import * as React from 'react';
import { connect } from 'react-redux';

import {
  detailsListRequest as detailsListRequestAction,
  removeMovieListRequest as removeMovieListRequestAction,
} from '../../store/theMovieDB/myLists/actions';
import { getDetailsList } from '../../store/theMovieDB/myLists/selectors';

import MyListComponent from './component';

interface DetailsListRequestParams {
  listId: string,
}

interface Props {
  myList: any,
  match: any,
  detailsListRequest(params: DetailsListRequestParams): void,
  removeMovieListRequest(): void,
}

interface State {
  myList: any,
}

class MyListContainer extends React.Component<Props, State> {
  componentDidMount() {
    const { detailsListRequest, match: { params: { id } } } = this.props;

    detailsListRequest({ listId: id });
  }

  render = () => {
    const { removeMovieListRequest,  match: { params: { id } } } = this.props;

    return (
      <MyListComponent
        {...this.props}
        modalParams={{
          title: 'Do you want to delete movie from this list?',
          params: { listId: id },
          onConfirm: removeMovieListRequest,
        }}
      />
    )
  }
}

const mapStateToProps = (state: State) => ({
  myList: getDetailsList(state),
});

const mapDispatchToProps = {
  detailsListRequest: detailsListRequestAction,
  removeMovieListRequest: removeMovieListRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyListContainer);
