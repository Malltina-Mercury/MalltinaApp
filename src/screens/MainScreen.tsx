import React from 'react';
import {SearchInput} from 'components/search/SearchInput';
import UserList from '../components/user/UserList';
import SearchContextProvider from 'context/SearchContextProvider';
import UsersContextProvider from 'context/UsersContextProvider';

interface Props {}

export const MainScreen: React.FC<Props> = () => {
  return (
    <>
      <SearchContextProvider>
        <UsersContextProvider>
          <SearchInput />
          <UserList />
        </UsersContextProvider>
      </SearchContextProvider>
    </>
  );
};
