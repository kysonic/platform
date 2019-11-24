// @flow
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import theme from '@themes/native-base/variables/platform';
import {useObserver} from 'mobx-react-lite';
import DatePicker from '@components/ui/DatePicker';
import {Form, Input, Item} from 'native-base';

import type {StyleSheetType} from '@types/base';
import type {UserType} from '@types/base';


type DataItemPropsType = {
    label: string,
    value: string | number,
}

const DataItem = ({label, value}: DataItemPropsType) => {
    return (
        <View style={dataItemStyles.container}>
            <Text style={dataItemStyles.label}>{label}</Text>
            <Text style={dataItemStyles.value}>{value || 'n/a'}</Text>
        </View>
    );
};

const dataItemStyles:StyleSheetType = StyleSheet.create({
    container: {
        margin: 5,
        padding: 20,
        borderColor: theme.cardBorderColor,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: 25,
        color: theme.weakText,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    value: {
        fontSize: 25,
        color: theme.weakText,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
});

type FormFieldPropsType = {
    name: string,
    type: string,
    label: string,
    value: mixed,
    onChange: () => void,
};

const FormField = ({name, type, label, value, onChange}: FormFieldPropsType) => {
    const Element = (type: string) => {
        switch (type) {
            case 'text':
                return (
                    <Input style={formFieldStyles.input} value={value} placeholder={label} onChangeText={(v) => onChange(name, v)} />
                );
            case 'date':
                return (
                    <DatePicker
                        value={value}
                        placehodler="Birth Date"
                        format="yyyy-MM-dd"
                        mode="date"
                        display="default"
                        onChange={(v) => onChange(name, v)}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <Item style={formFieldStyles.container}>
            {Element(type)}
        </Item>
    );
};

const formFieldStyles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
});

type PropertyType = {
    label: string,
    editable: boolean,
    showable: boolean,
    type?: string,
}

type PropertyListType = {
    [string]: PropertyType
}

const PROPERTY_LIST: PropertyListType = {
    name: {
        label: 'Name',
        editable: true,
        showable: false,
        type: 'text',
    },
    birthDate: {
        label: 'Birth Date',
        editable: true,
        showable: true,
        type: 'date',
    },
};

type EditableProfileDataPropsType = {
    editMode: boolean,
    user: UserType,
    onChange: () => void,
}

const EditableProfileData = ({editMode, user, onChange}: EditableProfileDataPropsType) => {
    const Wrapper = editMode ? Form : View;
    return useObserver(() =>(
        <Wrapper style={editableProfileDataStyles.container}>
            {Object.entries(PROPERTY_LIST).map(([key, value]: [string, Object]) => (
                    (editMode && value.editable) ?
                    <FormField key={key} {...value} name={key} value={user[key]} onChange={onChange} /> :
                    (!editMode && value.showable ? <DataItem key={key} label={value.label} value={user[key]} /> : null)
            ))}
        </Wrapper>
    ));
};

const editableProfileDataStyles: StyleSheetType = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default EditableProfileData;
