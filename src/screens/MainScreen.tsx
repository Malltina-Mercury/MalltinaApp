import React from 'react';
import { SearchInput } from './../components/search/SearchInput';
import UserList from '../components/user/UserList'
import GlobalStateUsers from 'context/GlobalStateUsers';



interface Props { }

export const MainScreen: React.FC<Props> = () => {


  return (
    <>
      <GlobalStateUsers>
        <SearchInput />
        <UserList />
      </GlobalStateUsers>

    </>

  )
};
