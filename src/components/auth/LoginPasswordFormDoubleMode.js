// @flow
import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LoginPasswordForm from './LoginPasswordForm';
// $FlowFixMe
import theme from '@themes/native-base/variables/platform';

import type { ModeType, StyleSheetType} from '@types/base';

const MODES = {
    login: {
        caption: 'Sign in',
        text: "Doesn't have account yet?",
    },
    register: {
        caption: 'Sing up',
        text: "Back to sign in",
    },
};

const MODE_KEYS = Object.keys(MODES);


const LoginPasswordFormDoubleMode = () => {
    const [mode, setMode] = useState('login');
    (mode: ModeType);

    const toggleMode = () => {
        setMode(MODE_KEYS[MODE_KEYS.indexOf(mode) ^ 1]);
    };

    const ToggleModeText = () => {
        return (
            <TouchableOpacity style={styles.link} onPress={toggleMode}>
                <Text style={styles.linkText}>{MODES[mode].text}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <LoginPasswordForm mode={mode} title={MODES[mode].caption} BeforeButton={ToggleModeText} />
    );
};

const styles: StyleSheetType = StyleSheet.create({
    link: {
        padding: 10,
        paddingLeft: 0,
        paddingRight: 0,
        width: '100%',
    },
    linkText: {
        marginTop: 10,
        textAlign: 'center',
        color: theme.brandSecondary,
        textDecorationLine: 'underline',
    },
});

export default LoginPasswordFormDoubleMode;
