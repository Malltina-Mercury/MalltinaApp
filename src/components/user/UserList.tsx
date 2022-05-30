import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useGetUserList} from 'hooks/useGetUserList';
import {UsersParams, UsersResponse} from 'types/api/users';
import {Person} from 'types/entity/person'
import {UserCard} from './UserCard';
import Loader from './Loader';
import {useSearchContext} from 'context/SearchContextProvider';
import {useUsersContext} from 'context/UsersContextProvider';
import styles from './UserListStyles';

interface Props {}

const UserList: React.FC<Props> = () => {
  const [getUser, setUsers] = useSearchContext();
  const [, setUserCache] = useUsersContext();

  const initialParams = {
    page: 2,
    exc: '',
    results: 12,
    seed: 'Maltina',
  };
  const [params, setParams] = useState<UsersParams>(initialParams);
  const [data, isLoaded] = useGetUserList(params, [params]);

  // const [lastData, setLastData] = useState<Person[]>()

  useEffect(() => {
    // console.log(getUser)
    if (data?.results) {
      // setLastData(data?.results)
      setUsers(prev => {
        const newState = prev;
        newState.filteredUsers = [
          ...(prev.filteredUsers || []),
          ...data?.results,
        ];
        newState.query=prev.query; /* emel | for save search text in search box */
        return newState;
      });
      setUserCache(prev => {
        const newState = prev;
        newState.users = [...(prev.users || []), ...data?.results];
        newState.latestPageFetched = params.page
        return newState;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.results]);

  /* use callback : if page add 1 get call useGetUserList again */
  const fetchMoreData = useCallback((): void => {
    // console.log('getUser.query')
    // console.log(getUser.query)
    if (getUser.query === undefined){
      // console.log(params.page)
      setParams({
        ...params,
        page: params.page ? params.page + 1 : params.page,
      });
      if (data?.results) {
        // setUsers(prev => {
        //   console.log(prev)
        //   const newState = prev;
        //   getUser.filteredUsers = [
        //     ...(getUser.filteredUsers || []),
        //     ...data?.results,
        //   ];
        //   newState.query=prev.query;
        //   return newState;
        // });
        setUsers({
          ...getUser,
          filteredUsers : [...getUser.filteredUsers || [], ...data?.results]
        })
      }
    }

  }, [params]);

  const renderLoader = () => (isLoaded ? <Loader /> : null);
  const renderEmpty = () => {
    return <Text>No Data at the moment or check Internt</Text>;
  };

  return (
    <View style={styles.container}>
      {!isLoaded ? (
        <Loader />
      ) : (
        <SafeAreaView>
          <FlatList
            data={getUser.filteredUsers}
            keyExtractor={(item, index) => item.id.name + index}
            renderItem={({item}) => (
              <View style={styles.cardContainer}>
                <UserCard person={item} />
              </View>
            )}
            onEndReached={fetchMoreData}
            onEndReachedThreshold={0.1}
            ListFooterComponent={renderLoader}
            ListEmptyComponent={renderEmpty}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      )}
    </View>
  );
};

export default UserList;