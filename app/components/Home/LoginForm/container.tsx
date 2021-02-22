import * as React from 'react';
import { connect } from 'react-redux';

import { createSessionRequest as createSessionRequestAction } from '../../../store/theMovieDB/login/actions';
import { loginError } from '../../../store/theMovieDB/login/selectors';

import LoginFormComponent from './component';

interface Props {
  loginError: string
  createSessionRequest: (params: object) => void
}

interface State {
  loginError: string
}

class LoginFormContainer extends React.Component<Props, State> {
  onSubmit = (values: any, actions: any): void => {
    const { createSessionRequest } = this.props;
    const params = { values, actions };

    actions.setSubmitting(true);
    createSessionRequest(params);
  };

  render = () => (
    <LoginFormComponent
      {...this.props}
      onSubmit={this.onSubmit}
    />
  );
}

const mapStateToProps = (state: State) => ({
  loginError: loginError(state),
});

const mapDispatchToProps = {
  createSessionRequest: createSessionRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginFormContainer);
