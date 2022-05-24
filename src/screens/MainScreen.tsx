import { UserCard } from 'components/user/UserCard';
import React from 'react';
import { Text } from 'react-native';
import { SearchInput } from './../components/search/SearchInput';
import UserList from '../components/user/UserList'


interface Props { }

export const MainScreen: React.FC<Props> = () => {
let  personNameitem={
    title: 'miss',
    first: "emel",
    last: 'mousavi',
  }
 
  return (
    <>  
     {/* <Text>Malltina App</Text> */}
     <SearchInput/>
      {/* <UserCard personName={personNameitem}  /> */}
      <UserList />
    </>

  )
};
