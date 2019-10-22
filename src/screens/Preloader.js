import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Spinner} from 'native-base';
import {auth} from 'react-native-firebase';
import {ConnectHeader} from '@utils/navigation';

const PreloaderScreen = ({navigation}) => {
    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (!user) {
                return navigation.navigate('Auth');
            }
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

ConnectHeader(PreloaderScreen);

export default PreloaderScreen;
