import * as React from 'react';

import SearchPage from './SearchPage';
import DashboardPage from './DashboardPage';

interface Props {
  searchQuery: string
}

const DashboardComponent = ({ searchQuery }: Props) => searchQuery ? <SearchPage /> : <DashboardPage />;

export default DashboardComponent;
