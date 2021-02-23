import * as React from 'react';
import { connect } from 'react-redux';

import { createdListsRequest as createdListsRequestAction } from '../../../../../store/theMovieDB/myLists/actions';
import { getCreatedLists } from '../../../../../store/theMovieDB/myLists/selectors';

import PopoverContentComponent from './component';

interface Props {
  myLists: any,
  movieId: string,
  onClosePopover(): void,
  createdListsRequest(params: object): void
}

interface State {
  myLists: any,
}

class PopoverContentContainer extends React.Component<Props, State> {
  componentDidMount() {
    const { createdListsRequest } = this.props;
    createdListsRequest({ page: 1 });
  }

  render = () => (
    <PopoverContentComponent {...this.props} />
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
)(PopoverContentContainer);
