// @flow
import React from 'react';
import {Image, Linking, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Container, Content, Button, Text, Icon} from 'native-base';
import {WithoutHeader} from '@utils/navigation';
import theme from '@themes/native-base/variables/platform';
import Video from 'react-native-video';
import SocialIcons from '@icons/social';
import Hrwt from '@components/ui/Hrwt';
import authStore from '@stores/auth';

import heroVideo from '@assets/video/ix-hero.mp4';

import type {StyleSheetType} from '@types/base';
import type {_NavigationInjectedProps} from 'react-navigation';

type PropsType = {
    navigation: _NavigationInjectedProps
}

const AuthScreen = ({navigation}: PropsType) => {
    return (
        <Container>
            <Content contentContainerStyle={styles.container}>
                <Video
                    source={heroVideo}
                    style={styles.backgroundVideo}
                    fullscreen={true} muted={true}
                    repeat={true}
                    resizeMode="cover"
                />
                <View></View>
                <View style={styles.centerGroup}>
                    <Text style={styles.socialText}>Sign in</Text>
                    <Button style={styles.button} onPress={() => navigation.navigate('AuthLoginPasswordSignIn')}>
                        <Icon style={styles.buttonIcon} type="Feather" name="mail"/>
                        <Text style={styles.buttonText}>Sing in with email</Text>
                    </Button>
                    <Hrwt text="OR" style={styles.hr}/>
                    <Button style={[styles.button, styles.googleBtn]} onPress={() => authStore.loginWithGoogle()}>
                        <Image style={styles.buttonImg} source={SocialIcons.google}></Image>
                        <Text style={styles.buttonText}>Sing in with google</Text>
                    </Button>
                    <Button style={[styles.button, styles.facebookBtn]} onPress={() => authStore.loginWithFacebook()}>
                        <Image style={styles.buttonImg} source={SocialIcons.facebook}></Image>
                        <Text style={styles.buttonText}>Sing in with facebook</Text>
                    </Button>
                    <TouchableOpacity style={styles.createAccount} onPress={() => navigation.navigate('AuthLoginPasswordSignUp')}>
                        <Text style={styles.createAccountText}>First time here?</Text>
                        <Text style={[styles.createAccountText, styles.createAccountTextBold]}>Create an account</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.privacyPolicyContainer}
                                      onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Privacy_policy')}>
                        <Text style={styles.privacyPolicy}>Privacy policy</Text>
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
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    centerGroup: {
        alignItems: 'center',
    },
    socialText: {
        width: '100%',
        textAlign: 'center',
        fontSize: 24,
        paddingBottom: 40,
        color: theme.brandPrimary,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    button: {
        marginTop: 20,
        height: 50,
        fontSize: 12,
        backgroundColor: theme.brandLight,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    buttonText: {
        color: theme.textColor,
    },
    buttonIcon: {
        color: theme.textColor,
    },
    buttonImg: {
        width: 24,
        height: 24,
    },
    googleBtn: {
        marginTop: 50,
        padding: 40,
    },
    facebookBtn: {
        marginTop: 50,
        padding: 33,
    },
    socialMediaForm: {
        width: '100%',
        height: 80,
    },
    privacyPolicyContainer: {
        marginBottom: 20,
    },
    privacyPolicy: {
        textAlign: 'center',
        color: theme.inverseTextColor,
    },
    hr: {
        marginTop: 50,
    },
    createAccount: {
        marginTop: 80,
        flexDirection: 'row',
    },
    createAccountText: {
        color: theme.inverseTextColor,
    },
    createAccountTextBold: {
        fontWeight: 'bold',
        marginLeft: 5,
    },
});

WithoutHeader(AuthScreen);

export default AuthScreen;
