import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {MainScreen} from '@screens/MainScreen';
import SearchContextProvider from 'context/SearchContextProvider';
import UsersContextProvider from 'context/UsersContextProvider';

const App: React.FC = () => (
  <SafeAreaView>
    <SearchContextProvider>
      <UsersContextProvider>
        <StatusBar />
        <MainScreen />
      </UsersContextProvider>
    </SearchContextProvider>
  </SafeAreaView>
);

export default App;
