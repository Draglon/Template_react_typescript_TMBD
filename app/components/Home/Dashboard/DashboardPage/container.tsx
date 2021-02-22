import * as React from 'react';
import { connect } from 'react-redux';

import { searchRequest as searchRequestAction } from '../../../../store/theMovieDB/search/actions';
import { trendingRequest as trendingRequestAction } from '../../../../store/theMovieDB/trending/actions';
import { getTrending } from '../../../../store/theMovieDB/trending/selectors';

import DashboardPageComponent from './component';

interface SearchRequestParams {
  query: string
  page: number
}

interface TrendingRequestParams {
  page: number
}

interface Props {
  trending: any
  searchRequest(params: SearchRequestParams): void
  trendingRequest(params: TrendingRequestParams): void
}

interface State {
  trending: any
}

class DashboardPageContainer extends React.Component<Props, State> {
  componentDidMount() {
    const { trendingRequest } = this.props;
    trendingRequest({ page: 1 });
  }

  onSearch = (value: string) => {
    const { searchRequest, trendingRequest } = this.props;
    searchRequest({ query: value, page: 1 });
    trendingRequest({ page: 1 });
  };

  handleGetPage = (page: number) => {
    const { trendingRequest } = this.props;
    trendingRequest({ page });
  };

  render = () => (
    <DashboardPageComponent
      {...this.props}
      onSearch={this.onSearch}
      onGetPage={this.handleGetPage}
    />
  )
}

const mapStateToProps = (state: State) => ({
  trending: getTrending(state),
});

const mapDispatchToProps = {
  searchRequest: searchRequestAction,
  trendingRequest: trendingRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardPageContainer);
