import { connect } from 'react-redux';

import { getSessionId } from '../../store/theMovieDB/login/selectors';

import AppComponent from './component';

interface State {
  sessionId: string
}

const mapStateToProps = (state: State) => ({
  sessionId: getSessionId(state),
});

export default connect(mapStateToProps)(AppComponent);
