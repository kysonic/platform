// @flow
import React, {useState, useCallback} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import theme from '@themes/native-base/variables/platform';

import type {StyleSheetType} from '@types/base';
import type {UserType} from '@types/base';
import {Input} from 'native-base';

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

const FormField = ({type, label, value, onChange}) => {
    switch (type) {
        case 'text':
            return (
                <Input style={formFieldStyles.input} value={value} placeholder={label} onChangeText={onChange} />
            );
        case 'date':
            return null;
        default:
            return null;
    }
};

const formFieldStyles = StyleSheet.create({
    input: {

    }
})

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
    ecoIndex: {
        label: 'Eco index',
        editable: false,
        showable: true,
    },
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
    return (
        <View style={editableProfileDataStyles.container}>
            {Object.entries(PROPERTY_LIST).map(([key, value]: [string, Object]) => (
                    (editMode && value.editable) ?
                    <FormField key={key} {...value} value={user[key]} onChange={onChange} /> :
                    (!editMode && value.showable ? <DataItem key={key} label={value.label} value={user[key]} /> : null)
            ))}
        </View>
    );
};

const editableProfileDataStyles: StyleSheetType = StyleSheet.create({
    container: {

    }
});

export default EditableProfileData;
