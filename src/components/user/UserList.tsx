import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useGetUserList} from 'hooks/useGetUserList';
import {UsersParams} from 'types/api/users';
import {UserCard} from './card/UserCard';
import {useSearchContext} from 'context/SearchContextProvider';
import {useUsersContext} from 'context/UsersContextProvider';
import styles from './UserListStyles';

interface Props {}

const UserList: React.FC<Props> = () => {
  const [searchContext, setSearchContext] = useSearchContext();
  const [usersContext, setUsersContext] = useUsersContext();

  const initialParams = {
    page: 1,
    exc: '',
    results: 10,
    seed: 'Maltina',
  };
  const [params, setParams] = useState<UsersParams>(initialParams);
  const [data, isLoaded] = useGetUserList(params, [params]);

  useEffect(() => {
    if (data?.results) {
      setSearchContext(prev => {
        const newState = prev;
        newState.filteredUsers = [
          ...(prev.filteredUsers || []),
          ...data?.results,
        ];
        newState.query =
          prev.query; /* emel | for save search text in search box */
        return newState;
      });
      setUsersContext(prev => {
        const newState = prev;
        newState.users = [...(prev.users || []), ...data?.results];
        newState.latestPageFetched = params.page;
        return newState;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.results]);

  /* use callback : if page add 1 get call useGetUserList again */
  const fetchMoreData = useCallback((): void => {
    if (!searchContext?.query) {
      setParams({
        ...params,
        page: params.page ? params.page + 1 : params.page,
      });
      if (data?.results) {
        //   setUsers({
        //     ...getUser,
        //     filteredUsers : [...getUser.filteredUsers || [], ...data?.results]
        //   })
        setSearchContext(prev => {
          // console.log(params.page)
          const newState = prev;
          // newState.filteredUsers = [
          //   ...(prev.filteredUsers || []),
          //   ...data?.results,
          // ];
          newState.filteredUsers = [...data?.results];
          return newState;
        });
      }
    }
  }, [data?.results, params, searchContext?.query, setSearchContext]);

  const renderEmpty = () => {
    return <Text>No Data at the moment or check Internet</Text>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={
          searchContext.query && searchContext.query.trim()
            ? searchContext.filteredUsers
            : usersContext.users
        }
        keyExtractor={(item, index) => item.id.name + index}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <UserCard person={item} />
          </View>
        )}
        onEndReached={fetchMoreData}
        onEndReachedThreshold={0.1}
        // ListFooterComponent={renderLoader}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default UserList;
