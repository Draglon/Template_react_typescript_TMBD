import * as React from 'react';

import MyListsTitle from './MyListsTitle';
import Lists from './Lists';
import Pagination from '../../shared/Pagination';

interface Props {
  myLists: any,
  onGetPage(page: number): void;
}

const MyListsComponent = ({ myLists, onGetPage }: Props) => myLists && (
  <>
    <MyListsTitle />
    <Lists lists={myLists.results} />
    <Pagination currentPage={myLists.page} page={onGetPage} totalPages={myLists.totalPages} />
  </>
);

export default MyListsComponent;
