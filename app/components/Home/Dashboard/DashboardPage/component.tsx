import * as React from 'react';

import Search from '../Search';
import MovieList from '../../../../shared/lists/MovieList';
import Pagination from '../../../../shared/Pagination';

interface Trending {
  page: number
  results: number
  totalPages: number
}

interface Props {
  trending: Trending
  onSearch(value: string): void
  onGetPage(page: number): void
}

const DashboardPageComponent = ({
  trending,
  onSearch,
  onGetPage,
}: Props) => (
  <>
    <Search onSearch={onSearch} />
    <MovieList movies={trending.results} />
    <Pagination currentPage={trending.page} page={onGetPage} totalPages={trending.totalPages} />
  </>
);

export default DashboardPageComponent;
