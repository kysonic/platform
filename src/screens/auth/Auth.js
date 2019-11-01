// @flow
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content, Button, Text} from 'native-base';
import SocialMediaForm from '@components/auth/SocialMediaForm';
import {WithoutHeader} from '@utils/navigation';
import type {StyleSheetType} from '@types/base';
import {_NavigationInjectedProps} from 'react-navigation';

type PropsType = {
    navigation: _NavigationInjectedProps
}

const AuthScreen = ({navigation}: PropsType) => {
    return (
        <Container>
            <Content contentContainerStyle={styles.container}>
                <View style={styles.centerGroup}>
                    <SocialMediaForm style={styles.socialIcons} />
                    <Button style={styles.button} rounded block onPress={() => navigation.navigate('AuthPhone')}>
                        <Text>Login with phone</Text>
                    </Button>
                </View>
            </Content>
        </Container>
    );
};

const styles: StyleSheetType = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerGroup: {
        width: 250,
        flexBasis: 120,
    },
    button: {
        width: '80%',
        marginLeft: '10%',
    },
    socialIcons: {
        width: '100%',
    },
});

WithoutHeader(AuthScreen);

export default AuthScreen;
