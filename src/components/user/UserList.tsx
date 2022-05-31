import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import {useGetUserList} from 'hooks/useGetUserList';
import {UsersParams} from 'types/api/users';
import {UserCard} from './card/UserCard';
import {useSearchContext} from 'context/SearchContextProvider';
import {useUsersContext} from 'context/UsersContextProvider';
import styles from './UserListStyles';

interface Props {}

const UserList: React.FC<Props> = () => {
  const [searchContext] = useSearchContext();
  const [usersContext, setUsersContext] = useUsersContext();
  const [params, setParams] = useState<UsersParams>({page: 1});
  const [data, isLoaded] = useGetUserList(params, [params]);

  useEffect(() => {
    if (data?.results) {
      setUsersContext(prev => {
        const newState = prev;
        newState.users = [...(prev.users || []), ...data?.results];
        newState.latestPageFetched = params.page;
        return newState;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const fetchMoreData = useCallback(() => {
    if (isLoaded) {
      return;
    }
    if (searchContext.query && searchContext.query.trim()) {
      return;
    }
    setParams({
      ...params,
      page: params.page ? params.page + 1 : 1,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const renderEmpty = () => {
    return <Text>No Data at the moment or check Internet</Text>;
  };

  return (
    <FlatList
      style={styles.container}
      data={
        searchContext.query && searchContext.query.trim()
          ? searchContext.filteredUsers
          : usersContext.users
      }
      keyExtractor={(item, index) => item.id.name + index}
      renderItem={({item}) => <UserCard person={item} />}
      onEndReached={fetchMoreData}
      onEndReachedThreshold={0.1}
      ListEmptyComponent={renderEmpty}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default UserList;
