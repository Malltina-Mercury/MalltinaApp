import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useGetUserList} from 'hooks/useGetUserList';
import {UsersParams, UsersResponse} from 'types/api/users';
import {UserCard} from './UserCard';
import Loader from './Loader';
import {useSearchContext} from 'context/SearchContextProvider';
import {useUsersContext} from 'context/UsersContextProvider';
import styles from './UserListStyles';
import {Person} from 'types/entity/person'

interface Props {}

const UserList: React.FC<Props> = () => {
  const [getUser, setUsers] = useSearchContext();
  const [, setUserCache] = useUsersContext();

  const initialParams = {
    page: 1,
    exc: '',
    results: 10,
    seed: 'Maltina',
  };

  const [params, setParams] = useState<UsersParams>(initialParams);
  const [data, isLoaded] = useGetUserList(params, []);

  const nextPage = data?.info.page && data?.info.page + 1
  const [nextData, isLoadedNextData] = useGetUserList({
    ...initialParams,
    page: nextPage,
  }, [params]);
  
  const [moreLoading, setMoreLoading] = useState<boolean>(false)
  const [cacheData, setCacheData] = useState <UsersResponse>();

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
    console.log('useEffect');
    console.log(params.page)
  }, [data?.results]);


  /* use callback : if page add 1 get call useGetUserList again */
  const fetchMoreData = useCallback((): void => {
    /*if ! isListEnd && !moreLoading */
    if (nextData?.results !== undefined){
      if (!moreLoading && isLoadedNextData && nextData?.info.page){
          setCacheData(nextData) 
          setParams({
            ...params,
            page: params.page ? params.page + 1 : params.page,
          }); /* update data with next page */
        }
      }
      else{
        setCacheData(data) 
      }
    
    console.log('data?.info.page')
    console.log(params.page)
    console.log(cacheData);
    console.log(nextData?.info)
    console.log(data?.info)
  }, [params]);


  const renderLoader = () => (isLoaded ? <Loader /> : null);
  const renderEmpty = () => {
    return <Text>No Data at the moment or check Internt</Text>;
  };

  return (
    <View style={styles.container}>
      {!isLoaded && !isLoadedNextData ? (
          <Loader />
      ) : (
        <SafeAreaView>
          <FlatList
            // data={getUser.filteredUsers}
            // data = {data?.info?.page === 1 ? nextData?.results : data?.results}
            data = {cacheData?.results? cacheData?.results : data?.results}
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
            // //onRefresh = {() => console.log('Refersh')}
            // //refreshing = {true}
          />
        </SafeAreaView>
      )}
    </View>
  );
};

export default UserList;