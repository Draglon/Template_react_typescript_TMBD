import { connect } from 'react-redux';
import { getSearchQuery } from '../../../store/theMovieDB/search/selectors';

import DashboardComponent from './component';

interface State {
  searchQuery: string
}

const mapStateToProps = (state: State) => ({
  searchQuery: getSearchQuery(state),
});

export default connect(mapStateToProps)(DashboardComponent);
