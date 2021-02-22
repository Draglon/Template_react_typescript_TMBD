import * as React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

interface Props {
  deleteSessionRequest(): void
}

const DropdownMenuComponent = ({ deleteSessionRequest }: Props) => (
  <Menu>
    <Menu.Item>
      <Link to="/">Dashboard</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Link to="/mylists">My Lists</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/watchlist">Watchlist</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/favorites">Favorites</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item onClick={deleteSessionRequest}>Logout</Menu.Item>
  </Menu>
);

export default DropdownMenuComponent;
