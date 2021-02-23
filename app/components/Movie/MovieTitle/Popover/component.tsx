import * as React from 'react';
import { Popover, Icon } from 'antd';

import PopoverContent from './PopoverContent';

interface Props {
  movieId: string,
  popoverVisible: boolean,
  onClosePopover(): void,
  onVisiblePopover(visible: boolean): void,
}

const PopoverComponent = ({
  movieId,
  popoverVisible,
  onClosePopover,
  onVisiblePopover,
}: Props) => (
  <Popover
    title="Add movie to list"
    trigger="click"
    visible={popoverVisible}
    onVisibleChange={onVisiblePopover}
    content={<PopoverContent onClosePopover={onClosePopover} movieId={movieId} />}
  >
    <Icon type="plus-circle" />
  </Popover>
);

export default PopoverComponent;
