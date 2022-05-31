import React, {useCallback} from 'react';
import {SearchInput} from 'components/search/SearchInput';
import UserList from '../components/user/UserList';
import {useUsersContext} from 'context/UsersContextProvider';
import {ModalUser} from 'components/user/modal/ModalUser';
import {useSearchContext} from 'context/SearchContextProvider';
import {useDebounce} from 'hooks/useDebounce';
import {SearchContext} from 'types/contexts/SearchContext';

interface Props {}

export const MainScreen: React.FC<Props> = () => {
  const [usersContext, setUserContexts] = useUsersContext();
  const [, setSearchContext] = useSearchContext();

  const closeModal = () => {
    setUserContexts(prevState => {
      const nextState = {...prevState};
      nextState.selectedUser = undefined;
      nextState.showSelectedUserModal = false;
      return nextState;
    });
  };

  const searchInUsers = useCallback(
    (query: string) => {
      let newSearchContext: SearchContext;
      if (query && query.trim()) {
        const filteredUsers = usersContext.users?.filter(user => {
          const fullName =
            `${user?.name?.first} ${user?.name?.last}`.toLowerCase();
          return fullName.indexOf(query.trim()) !== -1;
        });
        newSearchContext = {
          query: query,
          filteredUsers: filteredUsers,
        };
      } else {
        newSearchContext = {
          query: undefined,
          filteredUsers: [],
        };
      }

      setSearchContext(newSearchContext);
    },
    [setSearchContext, usersContext.users],
  );

  const searchDebounce = useDebounce(searchInUsers, 500);

  const onSearchQueryChanged = useCallback(searchDebounce, [searchDebounce]);

  const onSubmitSearch = useCallback(searchInUsers, [searchInUsers]);

  return (
    <>
      <SearchInput
        onSubmitSearch={onSubmitSearch}
        onChangeQuery={onSearchQueryChanged}
      />

      <UserList />

      <ModalUser
        modalVisible={usersContext?.showSelectedUserModal}
        person={usersContext.selectedUser || {}}
        onDismiss={closeModal}
      />
    </>
  );
};
