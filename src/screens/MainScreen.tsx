import React from 'react';
import {SearchInput} from 'components/search/SearchInput';
import UserList from '../components/user/UserList';
import {useUsersContext} from 'context/UsersContextProvider';
import {ModalUser} from 'components/user/modal/ModalUser';

interface Props {}

export const MainScreen: React.FC<Props> = () => {
  const [usersContext, setUserContexts] = useUsersContext();

  const closeModal = () => {
    setUserContexts(prevState => {
      const nextState = {...prevState};
      nextState.selectedUser = undefined;
      nextState.showSelectedUserModal = false;
      return nextState;
    });
  };

  return (
    <>
      <SearchInput />
      <UserList />
      {usersContext.showSelectedUserModal && usersContext.selectedUser && (
        <ModalUser
          modalVisible={usersContext.showSelectedUserModal}
          person={usersContext.selectedUser}
          onDismiss={closeModal}
        />
      )}
    </>
  );
};
