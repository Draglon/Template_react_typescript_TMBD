import * as React from 'react';
import { Icon } from 'antd';

const FavoriteIconComponent = ({ favorite, handleFavorite }) => (
  <Icon type="book" theme={favorite ? 'filled' : undefined} onClick={handleFavorite} />
);

// FavoriteIconComponent.propTypes = {
//   handleFavorite: PropTypes.func.isRequired,
//   favorite: PropTypes.bool.isRequired,
// };

export default FavoriteIconComponent;
