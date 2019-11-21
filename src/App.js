// @flow
import React, {useRef, useEffect} from 'react';
import {StatusBar, View, StyleSheet, Platform} from 'react-native';
import MainNavigator from '@navigator/Main';
import getTheme from '@themes/native-base/components';
import platform from '@themes/native-base/variables/platform';
import {StyleProvider, Root} from 'native-base';
import {useObserver} from 'mobx-react-lite';
import {reaction} from 'mobx';
import globalStore from '@stores/global';
import Footer from '@layouts/default/Footer';
import theme from '@themes/native-base/variables/platform';
import '@config/firebase.bootstrap';

function setStatusBar(route) {
    if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(route === 'Profile' ? 'transparent' : theme.toolbarDefaultBg);
        StatusBar.setTranslucent(route === 'Profile');
        StatusBar.setBarStyle( route === 'Profile' ? 'light-content' : 'dark-content',false);
        StatusBar.setHidden(!globalStore.statusBarEnabled);
    }
}

const App: () => React$Node = () => {

    const navigationRef = useRef();

    reaction(
        () => globalStore.route,
        () => {
            setStatusBar(globalStore.route);
        }
    );

    return useObserver(() => {
            return (
                <>
                    <StatusBar />
                    <StyleProvider style={getTheme(platform)}>
                        <Root>
                            <View style={styles.appContainer}>
                                <MainNavigator
                                    onNavigationStateChange={(prev, next, action) => {
                                        const routeName = next.routes[next.index]?.routeName;
                                        if (routeName) {
                                            globalStore.setRoute(routeName);
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
