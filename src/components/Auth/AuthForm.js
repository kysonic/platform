import React, {useEffect} from 'react';
import {Button, Form, Input, Item, Text} from 'native-base';
import {View, StyleSheet} from 'react-native';
import authStore from '@stores/auth/auth-store';
import {auth} from 'react-native-firebase';

const AuthForm = ({style = {}}) => {
    useEffect(() => {
        console.log('Effect');
        auth().onAuthStateChanged((user) => {
            console.log('Auth changed', user);
        })
    }, [])
    return (
        <Form style={[styles.form, style]}>
            <Item style={styles.item}>
                <Input style={styles.input} placeholder="Email" />
            </Item>
            <Item style={styles.item}>
                <Input style={styles.input} placeholder="Password" />
            </Item>
            <View style={styles.buttonContainer}>
                <Button block style={styles.button}>
                    <Text>Sign in</Text>
                </Button>
            </View>
        </Form>
    );
};

const styles = StyleSheet.create({
    form: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        marginTop: 10
    },
    input: {

    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        marginTop: 20,
        width: '50%'
    }
});

export default AuthForm;
