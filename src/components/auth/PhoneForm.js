// @flow
import React, {useState} from 'react';
import {Button, Form, Input, Item, Text} from 'native-base';
import {View, StyleSheet} from 'react-native';
import theme from '@themes/native-base/variables/platform';
import authStore from '@stores/auth/auth-store';
import {useObserver} from 'mobx-react-lite';
import {TextInputMask} from 'react-native-masked-text';

import type { StyleSheetType } from '@types/base';

type PropsType = {
    style?: StyleSheetType,
    title: string
}

const PhoneForm = ({style = {}, title}: PropsType) => {
    const [phone, setPhone] = useState('');
    (phone: string);

    return useObserver(() => (
        <Form style={[styles.form, style]}>
            <Text style={styles.title}>{title}</Text>
            <TextInputMask
                type="custom"
                style={styles.input}
                placeholder="+7 (XXX) XXX XX XX"
                keyboardType="numeric"
                value={phone}
                options={{
                    mask: '+7 (999) 999-99-99',
                }}
                onChangeText={text => {
                    setPhone(text)
                }}
            />
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
        borderColor: 'red',
        borderWidth: 1,
        width: '100%',
        height: 40,
        padding: 10,
    }
});

export default PhoneForm;
