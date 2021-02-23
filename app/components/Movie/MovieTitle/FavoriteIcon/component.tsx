import * as React from 'react';
import { Icon } from 'antd';

interface Props {
  favorite: boolean,
  onFavorite(): void,
}

const FavoriteIconComponent = ({ favorite, onFavorite }: Props) => (
  <Icon type="book" theme={favorite ? 'filled' : undefined} onClick={onFavorite} />
);

export default FavoriteIconComponent;
