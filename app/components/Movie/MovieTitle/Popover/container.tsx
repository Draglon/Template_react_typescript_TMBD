import * as React from 'react';

import PopoverComponent from './component';

interface Props {
  movieId: string,
}

interface State {}

class PopoverContainer extends React.Component<Props, State> {
  state = {
    popoverVisible: false,
  }

  handleClosePopover = () => {
    this.handleVisiblePopover(false);
  };

  handleVisiblePopover = (visible: boolean) => {
    this.setState({ popoverVisible: visible });
  };

  render = () => (
    <PopoverComponent
      {...this.props}
      {...this.state}
      onVisiblePopover={this.handleVisiblePopover}
      onClosePopover={this.handleClosePopover}
    />
  )
}

export default PopoverContainer;
