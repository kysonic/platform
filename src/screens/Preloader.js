import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Spinner} from 'native-base';
import auth from '@react-native-firebase/auth';
import userStore from '@stores/user';
import theme from '@themes/native-base/variables/platform';
import ixHeroPoster from '@assets/img/placeholders/ix-hero-poster.png';

const PreloaderScreen = ({navigation}) => {
    // Don't clear effect so how it should orchestrate auth state changes all the time
    useEffect(() => {
        auth().onAuthStateChanged((data) => {
            if (!data) {
                userStore.clearUser();
                return navigation.navigate('Auth');
            }
            userStore.getUser(data._user?.uid);
            navigation.navigate('Home');
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
