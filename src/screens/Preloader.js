import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Spinner} from 'native-base';
import auth from '@react-native-firebase/auth';
import {WithoutHeader} from '@utils/navigation';
import userStore from '@stores/user';

const PreloaderScreen = ({navigation}) => {
    // Don't clear effect so how it should orchestrate auth state changes all the time
    useEffect(() => {
        auth().onAuthStateChanged((data) => {
            if (!data) {
                return navigation.navigate('Auth');
            }

            userStore.getUser(data._user?.uid);
            navigation.navigate('Home');
        });
    }, []);
    return (
        <Container style={styles.container}>
            <Spinner color="green" />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

WithoutHeader(PreloaderScreen);

export default PreloaderScreen;
