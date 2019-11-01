// @flow
import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import LoginPasswordFormDoubleMode from '@components/auth/LoginPasswordFormDoubleMode';
import {WithoutHeader} from '@utils/navigation';
import type {StyleSheetType} from '@types/base';

const AuthLoginPasswordSignUpScreen = () => {
    return (
        <Container>
            <Content contentContainerStyle={styles.container}>
                <LoginPasswordFormDoubleMode />
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

WithoutHeader(AuthLoginPasswordSignUpScreen);

export default AuthLoginPasswordSignUpScreen;
