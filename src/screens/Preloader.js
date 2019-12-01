import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Spinner} from 'native-base';
import auth from '@react-native-firebase/auth';
import userStore from '@stores/user';
import authStore from '@stores/auth';
import globalStore from '@stores/global';
import theme from '@themes/native-base/variables/platform';
import ixHeroPoster from '@assets/img/placeholders/ix-hero-poster.png';
import NetInfo from '@react-native-community/netinfo';

const PreloaderScreen = ({navigation}) => {
    // Don't clear effect so how it should orchestrate auth state changes all the time
    useEffect(() => {

        auth().onAuthStateChanged((data) => {
            if (!data) {
                userStore.clearUser();
                if (!globalStore.isConnected) {
                    return navigation.navigate('NotConnected');
                }
                return navigation.navigate('Auth');
            }
            userStore.getUser(data._user?.uid);
            navigation.navigate('Home');
        });


        const unsubscribe = NetInfo.addEventListener(state => {
            if (!state.isConnected) {
                globalStore.setIsConnected(false);
                navigation.navigate('NotConnected');
            } else {
                globalStore.setIsConnected(true);
                if (globalStore.route === 'NotConnected') {
                    if (authStore.isAuth) {
                        navigation.navigate('Home');
                    } else {
                        navigation.navigate('Auth');
                    }
                }
            }
        });

    }, []);
    return (
        <ImageBackground source={ixHeroPoster} style={styles.container}>
            <Spinner color={theme.brandPrimary} />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PreloaderScreen;
