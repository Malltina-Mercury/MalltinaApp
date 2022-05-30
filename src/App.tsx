import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {MainScreen} from '@screens/MainScreen';

const App: React.FC = () => (
  <SafeAreaView>
    <StatusBar />
    <MainScreen />
  </SafeAreaView>
);

export default App;
