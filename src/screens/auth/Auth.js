// @flow
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Container, Content, Button, Text} from 'native-base';
import SocialMediaForm from '@components/auth/SocialMediaForm';
import {WithoutHeader} from '@utils/navigation';
import theme from '@themes/native-base/variables/platform';

import type {StyleSheetType} from '@types/base';
import type {_NavigationInjectedProps} from 'react-navigation';
type PropsType = {
    navigation: _NavigationInjectedProps
}

const AuthScreen = ({navigation}: PropsType) => {
    return (
        <Container>
            <Content contentContainerStyle={styles.container}>
                <View></View>
                <View style={styles.centerGroup}>
                    <Text style={styles.socialText}>Sing in with social networks</Text>
                    <SocialMediaForm style={styles.socialMediaForm} />
                    <Button style={styles.button} rounded block onPress={() => navigation.navigate('AuthPhone')}>
                        <Text>Sign in with phone</Text>
                    </Button>
                    <Button style={styles.button} rounded block onPress={() => navigation.navigate('AuthLoginPasswordSignIn')}>
                        <Text>Sing in with email</Text>
                    </Button>
                </View>
                <View>
                    <TouchableOpacity style={styles.registerContainer} onPress={() => navigation.navigate('AuthLoginPasswordSignUp')}>
                        <Text style={styles.register}>Registration</Text>
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>
    );
};

const styles: StyleSheetType = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    socialText: {
        width: '100%',
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 18,
        color: theme.listNoteColor,
    },
    centerGroup: {
        width: 250,
        height: 250,
        justifyContent: 'space-between',
    },
    button: {
        marginTop: 20,
        width: '80%',
        marginLeft: '10%',
    },
    socialMediaForm: {
        width: '100%',
        height: 80,
    },
    registerContainer: {
        marginBottom: 20,
    },
    register: {
        textAlign: 'center',
        color: theme.brandSecondary,
        textDecorationLine: 'underline',
    },
});

WithoutHeader(AuthScreen);

export default AuthScreen;
