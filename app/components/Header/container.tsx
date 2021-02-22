import * as React from 'react';
import { connect } from 'react-redux';

import { profileRequest as profileRequestAction } from '../../store/theMovieDB/profile/actions';
import { getProfile } from '../../store/theMovieDB/profile/selectors';

import HeaderComponent from './component';

interface Profile {
  id: number
  name: string
  username: string
  avatar: string
}

interface Props {
  profile: Profile
  profileRequest(): void
}

interface State {
  profile: Profile
}

class HeaderContainer extends React.Component<Props, State> {
  componentDidMount() {
    const { profileRequest } = this.props;

    profileRequest();
  }

  render = () => <HeaderComponent {...this.props} />
}

const mapStateToProps = (state: State) => ({
  profile: getProfile(state),
});

const mapDispatchToProps = {
  profileRequest: profileRequestAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
