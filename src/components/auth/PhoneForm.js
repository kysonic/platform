// @flow
import React, {useState, useEffect} from 'react';
import {Button, Form, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import theme from '@themes/native-base/variables/platform';
import {useObserver} from 'mobx-react-lite';
import {TextInputMask} from 'react-native-masked-text';
import authStore from '@stores/auth';
import FloatIcon from '@components/ui/FloatIcon';

import type { StyleSheetType } from '@types/base';

type PropsType = {
    style?: StyleSheetType,
    title: string,
}

const PHONE_SYMBOLS_COUNT = 16;
const CODE_SYMBOLS_COUNT = 6;

const PhoneForm = ({style = {}, title}: PropsType) => {
    const [phone, setPhone] = useState('');
    (phone: string);
    const [phoneReady, setPhoneReady] = useState(false);
    (phoneReady: boolean);
    const [code, setCode] = useState('');
    (code: string);
    const [codeReady, setCodeReady] = useState(false);
    (codeReady: boolean);

    useEffect(() => {
        setPhoneReady(phone.length === PHONE_SYMBOLS_COUNT);
    }, [phone]);

    useEffect(() => {
        setCodeReady(code.length === CODE_SYMBOLS_COUNT);
    }, [code]);

    const sendRequest = async () => {
        await authStore.loginWithPhone(phone);
    };

    const verifyCode = async () => {
        await authStore.confirmPhoneCode(code);
    };

    return useObserver(() => (
        <Form style={[styles.form, style]}>
            <Text style={styles.title}>{title}</Text>
            {
                authStore.error ? (
                    <Text style={styles.error}>{authStore.error}</Text>
                ) : null
            }
            {
                !authStore.phoneResponse ? (
                    <FloatIcon icon="check" isShown={phoneReady}>
                        <TextInputMask
                            placeholder = "+X (XXX) XXX XX XX"
                            keyboardType="numeric"
                            style={styles.input}
                            type="custom"
                            value={phone}
                            options={{
                                mask: '+9 999 999-99-99',
                            }}
                            onChangeText={text => setPhone(text)}
                        />
                    </FloatIcon>
                ) : null
            }
            {phoneReady && !authStore.phoneResponse ? (
                <Button style={styles.button} rounded block onPress={sendRequest}>
                    <Text>Login</Text>
                </Button>
            ) : null}
            {authStore.phoneResponse ? (
                <FloatIcon icon="check" isShown={codeReady}>
                    <TextInputMask
                        placeholder = "Enter verification code"
                        keyboardType="numeric"
                        style={styles.input}
                        type="custom"
                        value={code}
                        options={{
                            mask: '999999',
                        }}
                        onChangeText={text => setCode(text)}
                    />
                </FloatIcon>
            ) : null}
            {codeReady && authStore.phoneResponse ? (
                <Button style={styles.button} rounded block onPress={verifyCode}>
                    <Text>Verify Code</Text>
                </Button>
            ) : null}
        </Form>
    ));
};

const styles: StyleSheetType = StyleSheet.create({
    form: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        color: theme.listNoteColor,
    },
    input: {
        fontSize: theme.inputFontSize,
        borderWidth: theme.borderWidth,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        width: '100%',
        height: theme.inputHeightBase,
        padding: 10,
        textAlign: 'center',
        color: theme.inputColor,
    },
    button: {
        width: '80%',
        marginLeft: '10%',
        marginTop: 20,
    },
    error: {
        marginTop: 0,
        fontSize: 12,
        color: theme.brandDanger,
    },
});

export default PhoneForm;
