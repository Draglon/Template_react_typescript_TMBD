import * as React from 'react';
import { Button } from 'antd';

interface Props {
  list: any,
  onClick(): void,
}

const PopoverNavLinkComponent = ({ list, onClick }: Props) => (
  <Button type="link" onClick={onClick}>
    {list.name}
  </Button>
);

export default PopoverNavLinkComponent;
