// @flow
import React from 'react';
import {View, StyleSheet, Text, Picker} from 'react-native';
import theme from '@themes/native-base/variables/platform';
import {useObserver} from 'mobx-react-lite';
import DatePicker from '@components/ui/DatePicker';
import {Form, Input, Item, Icon} from 'native-base';
import {TextInputMask} from 'react-native-masked-text';

import type {StyleSheetType} from '@types/base';
import type {UserType} from '@types/base';


type DataItemPropsType = {
    label: string,
    value: string | number,
}

const DataItem = ({label, value, icon, index}: DataItemPropsType) => {
    return (
        <View style={[dataItemStyles.container, index === 1 ? dataItemStyles.first : {}]}>
            <View style={dataItemStyles.leftContainer}>
                {icon && <Icon style={dataItemStyles.icon} type="Feather" name={icon}></Icon>}
                <Text style={dataItemStyles.label}>{label}</Text>
            </View>
            <Text style={dataItemStyles.value}>{value || 'n/a'}</Text>
        </View>
    );
};

const dataItemStyles:StyleSheetType = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.brandLight,
        borderBottomWidth: 1,
        borderBottomColor: theme.containerBgColor,
    },
    first: {
        borderTopWidth: 1,
        borderTopColor: theme.containerBgColor,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: theme.weakText,
        fontSize: 18,
        marginRight: 10,
    },
    label: {
        fontSize: 16,
        color: theme.weakText,
        textAlign: 'center',
        fontWeight: '100',
    },
    value: {
        fontSize: 16,
        color: theme.strongText,
        textAlign: 'center',
    },
});

type FormFieldPropsType = {
    name: string,
    type: string,
    label: string,
    value: mixed,
    items: Array,
    onChange: () => void,
};

const FormField = ({name, type, label, value, items = [], onChange}: FormFieldPropsType) => {
    const Element = (type: string) => {
        switch (type) {
            case 'text':
                return (
                    <Input
                        style={formFieldStyles.field}
                        value={value}
                        placeholder={label}
                        onChangeText={(v) => onChange(name, v)}
                    />
                );
            case 'date':
                return (
                    <DatePicker
                        textStyle={formFieldStyles.field}
                        value={value}
                        placehodler="Birth Date"
                        format="yyyy-MM-dd"
                        mode="date"
                        display="default"
                        onChange={(v) => onChange(name, v)}
                    />
                );
            case 'phone':
                return (
                    <TextInputMask
                        style={formFieldStyles.field}
                        placeholder = "+X (XXX) XXX XX XX"
                        keyboardType="numeric"
                        type="custom"
                        value={value}
                        options={{
                            mask: '+9 999 999-99-99',
                        }}
                        onChangeText={text => onChange(name, text)}
                    />
                );
            case 'picker':
                return (
                    <Picker
                        selectedValue={value}
                        onValueChange={itemValue => onChange(name, itemValue)}
                        style={[formFieldStyles.field, formFieldStyles.picker]}
                    >
                        <Picker.Item value="" label="Select the team..." />
                        {items.map(({label, value}, index) => (
                            <Picker.Item key={`${label}-${index}`} label={label} value={value} />
                        ))}
                    </Picker>
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
    field: {
        fontSize: 16,
        color: theme.strongText,
    },
    picker: {
        height: 50,
        width: '100%',
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
    phoneNumber: {
        label: 'Phone',
        editable: true,
        showable: true,
        type: 'phone',
        icon: 'phone',
    },
    birthDate: {
        label: 'Birth Date',
        editable: true,
        showable: true,
        type: 'date',
        icon: 'gift',
    },
    favoriteTeam: {
        label: 'Favorite Team',
        editable: true,
        showable: true,
        type: 'picker',
        icon: 'users',
        items: [
            {
                label: 'Liverpool',
                value: 'Liverpool',
            },
            {
                label: 'Manchester United',
                value: 'Manchester United',
            },
            {
                label: 'Manchester City',
                value: 'Manchester City',
            },
            {
                label: 'Juventus',
                value: 'Juventus',
            },
            {
                label: 'Bayern Munich',
                value: 'Bayern Munich',
            },
        ],
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
        <Wrapper style={[editableProfileDataStyles.container, editMode ? editableProfileDataStyles.containerEdit : editableProfileDataStyles.containerShow]}>
            {Object.entries(PROPERTY_LIST).map(([key, value]: [string, Object], index) => (
                    (editMode && value.editable) ? (
                            <FormField
                                key={key}
                                {...value}
                                name={key}
                                value={user[key]}
                                onChange={onChange}
                            />
                        ) :
                    (!editMode && value.showable ? (
                            <DataItem
                                key={key}
                                index={index}
                                label={value.label}
                                icon={value.icon}
                                value={user[key]}
                            />
                    ) : null)
            ))}
        </Wrapper>
    ));
};

const editableProfileDataStyles: StyleSheetType = StyleSheet.create({
    container: {

    },
    containerShow: {
        marginTop: 10,
        ...theme.boxShadow,
    },
    containerEdit: {
        padding: 10,
    },
});

export default EditableProfileData;
