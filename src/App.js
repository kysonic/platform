// @flow
import React from 'react';
import { StatusBar } from 'react-native';
import MainNavigator from '@navigator/Main';
import getTheme from '@themes/native-base/components';
import platform from '@themes/native-base/variables/platform';
import {StyleProvider, Root} from 'native-base';
import '@config/firebase.bootstrap';

const App: () => React$Node = () => {
  return (
      <>
          <StatusBar barStyle="default" hidden={true} />
          <StyleProvider style={getTheme(platform)}>
              <Root>
                  <MainNavigator />
              </Root>
          </StyleProvider>
      </>
  );
};

export default App;
