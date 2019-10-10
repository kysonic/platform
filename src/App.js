// @flow

import React from 'react';
import { StatusBar } from 'react-native';
import MainNavigator from '@navigator/Main';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <MainNavigator />
    </>
  );
};

export default App;
