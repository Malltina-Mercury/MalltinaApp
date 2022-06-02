import React, {useCallback, useMemo} from 'react';
import {SearchInput} from 'components/search/SearchInput';
import UserList from '../components/user/UserList';
import {useUsersContext} from 'context/UsersContextProvider';
import {ModalUser} from 'components/user/modal/ModalUser';
import {useSearchContext} from 'context/SearchContextProvider';
import {useDebounce} from 'hooks/useDebounce';
import {SearchContext} from 'types/contexts/SearchContext';
import {View} from 'react-native';

import styles from './MainScreen.styles';
import {Person} from 'types/entity/person';

interface Props {}

export const MainScreen: React.FC<Props> = () => {
  const [usersContext, setUserContexts] = useUsersContext();
  const [searchContext, setSearchContext] = useSearchContext();

  const closeModal = () => {
    setUserContexts(prevState => {
      const nextState = {...prevState};
      nextState.selectedUser = undefined;
      nextState.showSelectedUserModal = false;
      return nextState;
    });
  };

  const searchInUsers = useCallback(
    (query: string | undefined) => {
      if (!query || !query.trim()) {
        query = undefined;
      }
      setSearchContext(prevState => {
        return {
          ...prevState,
          query: query,
        };
      });
    },
    [setSearchContext],
  );

  useMemo<Person[] | undefined>(() => {
    let users: Person[] | undefined = [];
    const query = searchContext.query;
    if (query && query.trim()) {
      users = usersContext.users?.filter(user => {
        const fullName =
          `${user?.name?.first} ${user?.name?.last}`.toLowerCase();
        return fullName.indexOf(query.trim()) !== -1;
      });
    }
    setSearchContext(prevState => {
      return {
        ...prevState,
        filteredUsers: users,
      };
    });
    return users;
  }, [searchContext.query, setSearchContext, usersContext.users]);

  const searchDebounce = useDebounce(searchInUsers, 500);

  const onSearchQueryChanged = useCallback(searchDebounce, [searchDebounce]);

  const onSubmitSearch = useCallback(searchInUsers, [searchInUsers]);

  return (
    <View style={styles.container}>
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
    </View>
  );
};
