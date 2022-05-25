import React, { useState, useEffect, useCallback } from 'react';
import styles from './UserListStyles';

import { Text, View, FlatList, SafeAreaView } from 'react-native';
import { useGetUserList } from '../../hooks/useGetUserList';
import { UsersParams } from 'types/api/users';
import { UserCard } from './UserCard';
import Loader from './Loader';
import { useUsersContext, useUsersContextSetState } from 'context/GlobalStateUsers';

interface Props { }
const UserList: React.FC<Props> = () => {

  const getUser = useUsersContext();
  const setUsers = useUsersContextSetState();

  const initialParams = {
    page: 2,
    exc: '',
    results: 12,
    seed: 'Maltina'
  }
  const [params, setParams] = useState<UsersParams>(initialParams);
  const [data, isLoaded, error] = useGetUserList(params, [params]);
 
  useEffect(() => {
    if (data?.results) {
      setUsers(prev => [...prev, ...data?.results])
    }
  }, [data?.results])

  /* use callback : if page add 1 get call useGetUserList again */
  const fetchMoreData = useCallback(():void => {
    // console.log(params.page)
    setParams({
      ...params,
      page: params.page ? params.page + 1 : params.page
    })
  }, [params])

 

  const renderLoader = () => isLoaded ? <Loader /> : null
  const renderEmpty = () => {
    return (
          <Text>
              No Data at  the moment or check Internt
          </Text>
      )
  }

  return (
    <View style = {styles.container}>
      {!isLoaded ? (<Loader />) 
      : (
        <SafeAreaView>
        <FlatList
          data={getUser}
          keyExtractor={(item, index) => item.id.name + index}
          renderItem={({ item }) =>
            <View style={styles.cardContainer}><UserCard person={item} /></View>
          }
          onEndReached = {fetchMoreData}
          onEndReachedThreshold = {0.1}
          ListFooterComponent={renderLoader}
          ListEmptyComponent={renderEmpty}
          contentContainerStyle={{ flexDirection:'column', paddingTop:40 }}
          showsVerticalScrollIndicator={false}
        />
        </SafeAreaView>
      )}
  </View>
  );
};

export default UserList;

