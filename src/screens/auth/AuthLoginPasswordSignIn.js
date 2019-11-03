// @flow
import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import LoginPasswordForm from '@components/auth/LoginPasswordForm';
import {WithoutHeader} from '@utils/navigation';
import type {StyleSheetType} from '@types/base';

const AuthLoginPasswordSignInScreen = () => {
    return (
        <Container>
            <Content contentContainerStyle={styles.container}>
                <LoginPasswordForm mode="login" title="Sing in" />
            </Content>
        </Container>
    );
};

const styles: StyleSheetType = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    form: {
        position: 'relative',
        bottom: 50,
    },
});

WithoutHeader(AuthLoginPasswordSignInScreen);

export default AuthLoginPasswordSignInScreen;
