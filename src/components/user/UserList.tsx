import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useGetUserList} from 'hooks/useGetUserList';
import {UsersParams} from 'types/api/users';
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

  useEffect(() => {
    if (data?.results) {
      setUsers(prev => {
        const newState = prev;
        newState.filteredUsers = [
          ...(prev.filteredUsers || []),
          ...data?.results,
        ];
        return newState;
      });
      setUserCache(prev => {
        const newState = prev;
        newState.users = [...(prev.users || []), ...data?.results];
        return newState;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.results]);

  /* use callback : if page add 1 get call useGetUserList again */
  const fetchMoreData = useCallback((): void => {
    // console.log(params.page)
    setParams({
      ...params,
      page: params.page ? params.page + 1 : params.page,
    });
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
            // onEndReached={fetchMoreData}
            // onEndReachedThreshold={0.1}
            // ListFooterComponent={renderLoader}
            // ListEmptyComponent={renderEmpty}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      )}
    </View>
  );
};

export default UserList;
