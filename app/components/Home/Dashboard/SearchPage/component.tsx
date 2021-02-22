import * as React from 'react';

import Search from '../Search';
import MovieList from '../../../../shared/lists/MovieList';
import Pagination from '../../../../shared/Pagination';

interface Search {
  page: number
  results: number
  totalPages: number
}

interface Props {
  search: Search
  onSearch(value: string): void
  onGetPage(page: number): void
}

const SearchPageComponent = ({
  search,
  onSearch,
  onGetPage,
}: Props) => (
  <>
    <Search onSearch={onSearch} />
    <MovieList movies={search.results} />
    <Pagination currentPage={search.page} page={onGetPage} totalPages={search.totalPages} />
  </>
);

export default SearchPageComponent;
