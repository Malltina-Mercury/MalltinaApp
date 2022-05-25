import React, { useState, useEffect } from 'react';
import styles from './UserListStyles';

import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { useGetUserList } from '../../hooks/useGetUserList';
import { UsersParams } from 'types/api/users';
import { UserCard } from './UserCard';
import { useUsersContext, useUsersContextSetState } from 'context/GlobalStateUsers';

interface Props { }
const UserList: React.FC<Props> = () => {

  const getUser = useUsersContext();
  const setUsers = useUsersContextSetState();

  const initialParams = {
    page: 2,
    exc: '',
    results: 7,
    seed: 'Maltina'
  }
  const [params, setParams] = useState<UsersParams>(initialParams);
  const [data, isLoaded, error] = useGetUserList(params, [params]);
 
  useEffect(() => {
    if (data?.results) {
      setUsers(prev => [...prev, ...data?.results])
    }
  }, [data?.results])




  const renderLoader = () => {
    return (
      <View>
        <ActivityIndicator size={'large'} color="grey" />
      </View>
    )
  }

  const fetchMoreData = (): void => {
    setParams({
      ...params,
      page: params.page ? params.page + 1 : params.page
    })
  }

  return (
    <View style={styles.container}>
      {!isLoaded ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        <FlatList
          data={getUser}
          keyExtractor={(item, index) => item.id.name + index}
          renderItem={({ item }) =>
            <UserCard person={item} />
          }
          // onEndReached = {fetchMoreData}
          // onEndReachedThreshold = {0.1}
          ListFooterComponent={renderLoader}
        />
      )}
    </View>
  );
};

export default UserList;

