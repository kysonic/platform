// @flow
import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import {WithoutHeader} from '@utils/navigation';
import PhoneFrom  from '@components/auth/PhoneForm';

import type {StyleSheetType} from '@types/base';

const AuthPhoneScreen = () => {
    return (
        <Container>
            <Content contentContainerStyle={styles.container}>
                <PhoneFrom title="Login with phone" />
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

WithoutHeader(AuthPhoneScreen);

export default AuthPhoneScreen;
