import * as React from 'react';
import { connect } from 'react-redux';

import { addMovieListRequest as addMovieListRequestAction } from '../../../../../../store/theMovieDB/myLists/actions';

import PopoverNavLinkComponent from './component';

interface Props {
  list: any,
  movieId: string,
  onClosePopover(): void,
  addMovieListRequest(params: object): void,
}

interface State {}

class PopoverNavLinkContainer extends React.Component<Props, State> {
  handleClick = () => {
    const { addMovieListRequest, list, movieId, onClosePopover } = this.props;
    addMovieListRequest({ listId: list.id, movieId });
    onClosePopover();
  };

  render = () => (
    <PopoverNavLinkComponent
      {...this.props}
      onClick={this.handleClick}
    />
  )
}

const mapDispatchToProps = {
  addMovieListRequest: addMovieListRequestAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(PopoverNavLinkContainer);
