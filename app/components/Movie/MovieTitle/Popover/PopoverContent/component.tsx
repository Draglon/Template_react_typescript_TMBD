import * as React from 'react';

import CreateListModal from '../../../../../shared/modal/CreateListModal';
import PopoverNavLink from './PopoverNavLink';

interface Props {
  movieId: string,
  myLists: any,
  onClosePopover(): void,
}

const PopoverContentComponent = ({
  myLists,
  movieId,
  onClosePopover,
}: Props) => (
  <nav className="popover__nav">
    <ul>
      <li onClick={onClosePopover}>
        <CreateListModal text="Create new list ..." />
      </li>
      {myLists.results.map((item: any) => (
        <li key={item.id}>
          <PopoverNavLink list={item} movieId={movieId} onClosePopover={onClosePopover} />
        </li>
      ))}
    </ul>
  </nav>
);

export default PopoverContentComponent;
