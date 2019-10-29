// @flow
import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import AuthFormDoubleMode from '@components/auth/AuthFormDoubleMode';
import {WithoutHeader} from '@utils/navigation';
import type {StyleSheetType} from '@types/base';

const AuthScreen = () => {
    return (
        <Container>
            <Content contentContainerStyle={styles.container}>
                <AuthFormDoubleMode />
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

WithoutHeader(AuthScreen);

export default AuthScreen;
