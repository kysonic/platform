// @flow

import React from 'react';
import { StatusBar } from 'react-native';
import MainNavigator from '@navigator/Main';
import getTheme from '@themes/native-base/components';
import material from '@themes/native-base/variables/material';
import {StyleProvider} from 'native-base';

const App: () => React$Node = () => {
    console.log(getTheme(material));
  return (
      <>
          <StatusBar barStyle="dark-content" />
          <StyleProvider style={getTheme(material)}>
              <MainNavigator />
          </StyleProvider>
      </>
  );
};

export default App;
