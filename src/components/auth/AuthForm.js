// @flow
import React, {useState} from 'react';
import {Button, Form, Input, Item, Text} from 'native-base';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import theme from '@themes/native-base/variables/trash';
import authStore from '@stores/auth/auth-store';
import * as yup from 'yup';
import {useObserver} from 'mobx-react-lite';

type Mode = "login" | "register";

type Errors = {
    [string]: string
}

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

const validationSchema = yup.object().shape({
    email: yup.string().email('Email is not correct').required('Email is required'),
    password: yup.string().min(3, 'Password should contain at least 3 symbols').required('Password is required')
});

const AuthForm = ({style = {}}) => {
    const [mode, setMode] = useState('login');
    (mode: Mode);
    const [errors, setErrors] = useState({});
    (errors: Errors);
    const [email, setEmail] = useState('');
    (email: string);
    const [password, setPassword] = useState('');
    (password: string);

    const toggleMode = () => {
        setEmail('');
        setPassword('');
        setErrors({});
        setMode(MODE_KEYS[MODE_KEYS.indexOf(mode) ^ 1]);
    };

    const modeAction = async () => {
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

    return useObserver(() => (
        <Form style={[styles.form, style]}>
            <Text style={styles.title}>{MODES[mode].caption}</Text>
            <Item style={styles.item}>
                <Input style={styles.input} placeholder="Email" onChangeText={(value) => setEmail(value)} />
                {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
            </Item>
            <Item style={styles.item}>
                <Input style={styles.input} secureTextEntry={true} placeholder="Password" onChangeText={(value) => setPassword(value)} />
                {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}
            </Item>
            {
                authStore.error ? (
                    <Text style={styles.error}>{authStore.error}</Text>
                ) : null
            }
            <TouchableOpacity style={styles.link} onPress={toggleMode}>
                <Text style={styles.linkText}>{MODES[mode].text}</Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                <Button block style={styles.button} onPress={modeAction}>
                    <Text>{!authStore.isLoading ? MODES[mode].caption : '...'}</Text>
                </Button>
            </View>
        </Form>
    ));
};

const styles = StyleSheet.create({
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
