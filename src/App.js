// @flow
import React from 'react';
import { StatusBar } from 'react-native';
import MainNavigator from '@navigator/Main';
// $FlowFixMe
import getTheme from '@themes/native-base/components';
// $FlowFixMe
import platform from '@themes/native-base/variables/platform';
import {StyleProvider, Root} from 'native-base';

const App: () => React$Node = () => {
  return (
      <>
          <StatusBar barStyle="dark-content" />
          <StyleProvider style={getTheme(platform)}>
              <Root>
                  <MainNavigator />
              </Root>
          </StyleProvider>
      </>
  );
};

export default App;
