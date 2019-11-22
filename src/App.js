// @flow
import React, {useRef, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MainNavigator from '@navigator/Main';
import getTheme from '@themes/native-base/components';
import platform from '@themes/native-base/variables/platform';
import {StyleProvider, Root} from 'native-base';
import {useObserver} from 'mobx-react-lite';
import globalStore from '@stores/global';
import Footer from '@layouts/default/Footer';
import {getActiveRouteName} from '@utils/navigation';
import StatusBar from '@components/controllers/StatusBar';

import '@config/firebase.bootstrap';

function navigationStateChangeHandler(prevState, currentState, action) {
    const routeName = getActiveRouteName(currentState);
    if (routeName) {
        globalStore.setRoute(routeName);
    }
}

const App: () => React$Node = () => {

    const navigationRef = useRef(null);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return useObserver(() => {
            return (
                <>
                    <StatusBar />
                    <StyleProvider style={getTheme(platform)}>
                        <Root>
                            <View style={styles.appContainer}>
                                <MainNavigator
                                    ref={navigationRef}
                                    onNavigationStateChange={navigationStateChangeHandler}
                                />
                                {globalStore.footerEnabled && isMounted ? (
                                    <Footer navigationContainer={navigationRef.current}/>
                                ) : null}
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
