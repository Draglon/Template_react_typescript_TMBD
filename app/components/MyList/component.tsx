import * as React from 'react';

import MyListTitle from './MyListTitle';
import MovieList from '../../shared/lists/MovieList';

interface ModalParams {
  title: string,
  params: any,
  onConfirm(): void,
}

interface Props {
  myList: any,
  modalParams: ModalParams,
}

const MyListComponent = ({
  myList,
  modalParams,
}: Props) => myList && (
  <>
    <MyListTitle myList={myList} />
    <MovieList movies={myList.results} modalParams={modalParams} />
  </>
);

export default MyListComponent;
