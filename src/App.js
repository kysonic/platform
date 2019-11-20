// @flow
import React, {useRef} from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import MainNavigator from '@navigator/Main';
import getTheme from '@themes/native-base/components';
import platform from '@themes/native-base/variables/platform';
import {StyleProvider, Root} from 'native-base';
import {useObserver} from 'mobx-react-lite';
import globalStore from '@stores/global';
import Footer from '@layouts/default/Footer';
import '@config/firebase.bootstrap';

const App: () => React$Node = () => {

    const navigationRef = useRef();

    return useObserver(() => {
            return (
                <>
                    <StatusBar barStyle="default" hidden={!globalStore.statusBarEnabled}/>
                    <StyleProvider style={getTheme(platform)}>
                        <Root>
                            <View style={styles.appContainer}>
                                <MainNavigator
                                    onNavigationStateChange={(prev, next, action) => {
                                        if (action && action.routeName) {
                                            globalStore.setRoute(action.routeName);
                                        }
                                    }}
                                    ref={navigationRef}
                                />
                                {globalStore.footerEnabled ? <Footer navigationContainer={navigationRef.current}/> : null}
                            </View>
                        </Root>
                    </StyleProvider>
                </>
            );
        }
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
});

export default App;
