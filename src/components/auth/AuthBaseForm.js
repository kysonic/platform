// @flow
import React from 'react';
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Button, Icon, Text} from 'native-base';
import SocialIcons from '@icons/social';
import Hrwt from '@components/ui/Hrwt';
import authStore from '@stores/auth';
import theme from '@themes/native-base/variables/platform';

const AuthBaseForm = ({onSetMode}) => {
    return (
        <>
            <Text style={styles.socialText}>Sign in</Text>
            <Button style={styles.button} onPress={() => onSetMode('login')}>
                <Icon style={styles.buttonIcon} type="Feather" name="mail"/>
                <Text style={styles.buttonText}>Sign in with email</Text>
            </Button>
            <Hrwt text="OR" style={styles.hr}/>
            <Button style={[styles.button, styles.googleBtn]} onPress={() => authStore.loginWithGoogle()}>
                <Image style={styles.buttonImg} source={SocialIcons.google} />
                <Text style={styles.buttonText}>Sign in with google</Text>
            </Button>
            <Button style={[styles.button, styles.facebookBtn]} onPress={() => authStore.loginWithFacebook()}>
                <Image style={styles.buttonImg} source={SocialIcons.facebook} />
                <Text style={styles.buttonText}>Sign in with facebook</Text>
            </Button>
            <TouchableOpacity style={styles.createAccount} onPress={() => onSetMode('register')}>
                <Text style={styles.createAccountText}>First time here?</Text>
                <Text style={[styles.createAccountText, styles.createAccountTextBold]}>Create an account</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    socialText: {
        width: '100%',
        textAlign: 'center',
        fontSize: 24,
        paddingBottom: 40,
        color: theme.brandPrimary,
        ...theme.textShadow,
    },
    button: {
        marginTop: 20,
        height: 50,
        fontSize: 12,
        backgroundColor: theme.brandLight,
        ...theme.boxShadow,
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

export default AuthBaseForm;
