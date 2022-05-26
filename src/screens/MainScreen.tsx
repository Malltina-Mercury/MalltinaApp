import React from 'react';
import {SearchInput} from 'components/search/SearchInput';
import UserList from '../components/user/UserList';
import GlobalStateUsers from 'context/GlobalStateUsers';
import GlobalStateUsersCache from 'context/GlobalStateUsersCache';

interface Props {}

export const MainScreen: React.FC<Props> = () => {
  return (
    <>
      <GlobalStateUsers>
        <GlobalStateUsersCache>
          <SearchInput />
          <UserList />
        </GlobalStateUsersCache>
      </GlobalStateUsers>
    </>
  );
};
