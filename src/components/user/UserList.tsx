import React , {useState} from 'react';
import {Text, View, StyleSheet, FlatList } from 'react-native';
import {useGetUserList} from '../../hooks/useGetUserList';
import {UsersParams} from 'types/api/users';
import {UserCard } from './UserCard';


interface Props { }

const UserList: React.FC<Props> = () => {
    const [params, setParams] = useState <UsersParams>(
      {
        page: 1,
        exc: '',
        results: 2,
        seed: 'Maltina'
      });

      const [data,isLoaded, error] = useGetUserList(params, []);
      return (
        <View style={styles.container}>
            {!isLoaded ? (
              <Text>Loading</Text>
            ) : (
              <FlatList
                data = {data?.results}
                 renderItem={({item}) => <UserCard person={item} />}
              />
            )}
        </View>
      );
};

export default UserList;

const styles = StyleSheet.create({
  container: {}
});
