// @flow
import React, {useState} from 'react';
import {Linking, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'native-base';
import {WithoutHeader} from '@utils/navigation';
import AuthBaseForm from '@components/auth/AuthBaseForm';
import LoginPasswordForm from '@components/auth/LoginPasswordForm';
import IXHeroVideo from '@components/ui/IXHeroVideo';
import {MODES} from '@components/auth/LoginPasswordFormDoubleMode';
import theme from '@themes/native-base/variables/platform';

import type {StyleSheetType} from '@types/base';
import type {_NavigationInjectedProps} from 'react-navigation';



type PropsType = {
    navigation: _NavigationInjectedProps
}

type AuthModeType = 'base' | 'login' | 'register';

const AuthScreen = ({navigation}: PropsType) => {
    const [mode, setMode] = useState('base');
    (mode: AuthModeType)

    return (
        <View style={styles.container}>
            <IXHeroVideo />
            <View></View>
            <View style={styles.centerGroup}>
                {
                    mode === 'base' ? (
                        <AuthBaseForm onSetMode={(mode) => setMode(mode)} />
                    ) : (
                        <LoginPasswordForm style={styles.loginForm} mode={mode} title={MODES[mode].caption} />
                    )
                }
            </View>
            <View>
                <TouchableOpacity style={styles.privacyPolicyContainer}
                                  onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Privacy_policy')}>
                    <Text style={styles.privacyPolicy}>Privacy policy</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles: StyleSheetType = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    centerGroup: {
        alignItems: 'center',
    },
    privacyPolicyContainer: {
        marginBottom: 20,
    },
    privacyPolicy: {
        textAlign: 'center',
        color: theme.inverseTextColor,
    },
    loginForm: {
        height: 200,
    },
});

WithoutHeader(AuthScreen);

export default AuthScreen;
