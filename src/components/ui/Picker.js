// @flow
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'native-base';
import ModalSelector from 'react-native-modal-selector'
import theme from '@themes/native-base/variables/platform';

import type {StyleSheetType} from '@types/base';

type DatePickerPropsType = {
    value?: Date,
    minimumDate?: Date,
    maximumDate?: Date,
    locale?: string,
    is24Hour?: boolean,
    minuteInterval?: number,
    format: string,
    value: string,
}

const Picker = (props: DatePickerPropsType) => {
    return (
        <ModalSelector
            {...props}
            style={pickerStyles.picker}
            selectStyle={pickerStyles.pickerSelect}
            selectTextStyle={pickerStyles.pickerSelectText}
            initValueTextStyle={pickerStyles.pickerInitText}
        >
        </ModalSelector>
    );
};

const pickerStyles: StyleSheetType = StyleSheet.create({
    picker: {
        width: '100%',
        textAlign: 'left',
    },
    pickerSelect: {
        borderWidth: 0,
        padding: 0,
        margin: 0,
        textAlign: 'left',
        paddingLeft: 5,
        paddingTop: 15,
        paddingBottom: 15,
    },
    pickerSelectText: {
        textAlign: 'left',
        fontSize: 16,
        color: theme.strongText,
    },
    pickerInitText: {
        textAlign: 'left',
        fontSize: 16,
        color: theme.strongText,
    },
});

export default Picker;
