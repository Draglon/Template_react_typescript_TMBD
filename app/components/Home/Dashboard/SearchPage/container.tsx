import * as React from 'react';
import { connect } from 'react-redux';

import { searchRequest as searchRequestAction } from '../../../../store/theMovieDB/search/actions';
import { getSearch } from '../../../../store/theMovieDB/search/selectors';

import SearchPageComponent from './component';

interface SearchRequestParams {
  query: string
  page: number
}

interface Search {
  query: string
  page: number
  results: number
  totalPages: number
}

interface Props {
  search: Search
  searchRequest(params: SearchRequestParams): void
}

interface State {
  search: Search
}

class SearchPageContainer extends React.Component<Props, State> {
  onSearch = (value: string) => {
    const { searchRequest } = this.props;
    searchRequest({ query: value, page: 1 });
  };

  handleGetPage = (page: number) => {
    const { searchRequest, search } = this.props;
    searchRequest({ query: search.query, page });
  };

  render = () => (
    <SearchPageComponent
      {...this.props}
      onSearch={this.onSearch}
      onGetPage={this.handleGetPage}
    />
  )
}

const mapStateToProps = (state: State) => ({
  search: getSearch(state),
});

const mapDispatchToProps = {
  searchRequest: searchRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPageContainer);
