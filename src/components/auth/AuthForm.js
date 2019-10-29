// @flow
import React, {useState} from 'react';
import {Button, Form, Input, Item, Text} from 'native-base';
import {View, StyleSheet} from 'react-native';
// $FlowFixMe
import theme from '@themes/native-base/variables/platform';
import authStore from '@stores/auth/auth-store';
import * as yup from 'yup';
import {useObserver} from 'mobx-react-lite';

import type { ModeType, StyleSheetType } from '@types/base';

type Errors = {
    [string]: string
}

const validationSchema = yup.object().shape({
    email: yup.string().email('Email is not correct').required('Email is required'),
    password: yup.string().min(3, 'Password should contain at least 3 symbols').required('Password is required'),
});


type PropsType = {
    mode: ModeType,
    style?: StyleSheetType,
    BeforeButton?: () => any,
    title: string
}

const AuthForm = ({mode, BeforeButton, style = {}, title}: PropsType) => {
    const [errors, setErrors] = useState({});
    (errors: Errors);
    const [email, setEmail] = useState('');
    (email: string);
    const [password, setPassword] = useState('');
    (password: string);


    const modeAction = async () => {
        if (authStore.isLoading) {
            return false;
        }
        setErrors({});
        try {
            authStore.setIsLoading(true);
            await validationSchema.validate({email, password}, {abortEarly: false});
            authStore[mode](email, password);
        } catch (e) {
            const errors = {};
            authStore.setIsLoading(false);
            e.inner.forEach(error => errors[error.path] = error.message);
            setErrors(errors);
        }
    };

    const clearForm = () => {
        setEmail('');
        setPassword('');
        setErrors({});
    };

    return useObserver(() => (
        <Form style={[styles.form, style]}>
            <Text style={styles.title}>{title}</Text>
            <Item style={styles.item}>
                <Input style={styles.input} value={email} placeholder="Email" onChangeText={(value) => setEmail(value)} />
                {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
            </Item>
            <Item style={styles.item}>
                <Input style={styles.input} value={password} secureTextEntry={true} placeholder="Password" onChangeText={(value) => setPassword(value)} />
                {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}
            </Item>
            {
                authStore.error ? (
                    <Text style={styles.error}>{authStore.error}</Text>
                ) : null
            }
            {BeforeButton ? <BeforeButton /> : null}
            <View style={styles.buttonContainer}>
                <Button block style={styles.button} onPress={modeAction}>
                    <Text>{!authStore.isLoading ? title : '...'}</Text>
                </Button>
            </View>
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
    error: {
        marginTop: 0,
        fontSize: 12,
        color: theme.brandDanger,
    },
    item: {
        marginTop: 10,
    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        marginTop: 10,
        width: '75%',
    },
});

export default AuthForm;
