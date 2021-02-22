import { connect } from 'react-redux';

import { getSessionId } from '../../store/theMovieDB/login/selectors';

import AppComponent from './component';

interface RootState {
  sessionId: string
}

const mapStateToProps = (state: RootState) => ({
  sessionId: getSessionId(state),
});

export default connect(mapStateToProps)(AppComponent);
