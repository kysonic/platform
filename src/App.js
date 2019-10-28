import React from 'react';
import { StatusBar } from 'react-native';
import MainNavigator from '@navigator/Main';
import getTheme from '@themes/native-base/components';
import trash from '@themes/native-base/variables/trash';
import {StyleProvider, Root} from 'native-base';

const App: () => React$Node = () => {
  return (
      <>
          <StatusBar barStyle="dark-content" />
          <StyleProvider style={getTheme(trash)}>
              <Root>
                  <MainNavigator />
              </Root>
          </StyleProvider>
      </>
  );
};

export default App;
