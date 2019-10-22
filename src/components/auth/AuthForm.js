// @flow
import React, {useState} from 'react';
import {Button, Form, Input, Item, Text} from 'native-base';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import theme from '@themes/native-base/variables/trash';

type Mode = "login" | "register";

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

const AuthForm = ({style = {}}) => {
    const [mode, setMode] = useState('login');
    (mode: Mode);

    const toggleMode = () => {
        console.log(MODE_KEYS[MODE_KEYS.indexOf(mode) ^ 1]);
        setMode(MODE_KEYS[MODE_KEYS.indexOf(mode) ^ 1]);
    };

    return (
        <Form style={[styles.form, style]}>
            <Text style={styles.title}>{MODES[mode].caption}</Text>
            <Item style={styles.item}>
                <Input style={styles.input} placeholder="Email" />
            </Item>
            <Item style={styles.item}>
                <Input style={styles.input} placeholder="Password" />
            </Item>
            <TouchableOpacity style={styles.link} onPress={toggleMode}>
                <Text style={styles.linkText}>{MODES[mode].text}</Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                <Button block style={styles.button}>
                    <Text>{MODES[mode].caption}</Text>
                </Button>
            </View>
        </Form>
    );
};

const styles = StyleSheet.create({
    form: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        color: theme.brandPrimaryDark,
    },
    item: {
        marginTop: 10,
    },
    link: {
       padding: 10,
       paddingLeft: 0,
       paddingRight: 0,
       width: '100%'
    },
    linkText: {
        marginTop: 15,
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
    }
});

export default AuthForm;
