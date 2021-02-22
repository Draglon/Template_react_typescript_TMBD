import * as React from 'react';
import { connect } from 'react-redux';

import { addMovieListRequest as addMovieListRequestAction } from '../../../../../../store/theMovieDB/myLists/actions';

import PopoverNavLinkComponent from './component';

class PopoverNavLinkContainer extends React.Component {
  onClick = () => {
    const { addMovieListRequest, list, movieId, closePopover } = this.props;
    addMovieListRequest({ listId: list.id, movieId });
    closePopover();
  };

  render() {
    return <PopoverNavLinkComponent {...this.props} onClick={this.onClick} />;
  }
}

// PopoverNavLinkContainer.propTypes = {
//   addMovieListRequest: PropTypes.func.isRequired,
//   closePopover: PropTypes.func.isRequired,
//   list: PropTypes.object.isRequired,
//   movieId: PropTypes.number.isRequired,
// };

const mapDispatchToProps = {
  addMovieListRequest: addMovieListRequestAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(PopoverNavLinkContainer);
