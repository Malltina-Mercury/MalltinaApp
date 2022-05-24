import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {MainScreen} from '@screens/MainScreen';
import {useGetUserList} from 'hooks/useGetUserList';

const App: React.FC = () => {
  const [data, isLoaded, error] = useGetUserList({results: 1, page: 1}, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <MainScreen />
      {/* <Text>{JSON.stringify(data)}</Text>
      <Text>{JSON.stringify(error)}</Text> */}
    </SafeAreaView>
  );
};

export default App;
