import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {MainScreen} from '@screens/MainScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <MainScreen />
    </SafeAreaView>
  );
};

export default App;
