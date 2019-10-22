import React from 'react';
import {View, StyleSheet} from 'react-native';
import AuthForm from '@components/auth/AuthForm';
import {ConnectHeader} from '@utils/navigation';

const AuthScreen = (props) => {
    return (
        <View style={styles.container}>
            <AuthForm style={styles.form} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    form: {
        position: 'relative',
        bottom: 50,
    },
});

ConnectHeader(AuthScreen);

export default AuthScreen;
