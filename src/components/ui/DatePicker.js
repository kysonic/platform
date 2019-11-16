// @flow
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DatePicker as NBDatePicker, Text} from 'native-base';
import {DateTime} from 'luxon';

import type {StyleSheetType} from "@types/base";

type DatePickerPropsType = {
    defaultDate?: Date,
    minimumDate?: Date,
    maximumDate?: Date,
    locale?: string,
    timeZoneOffsetInMinutes?: number,
    modalTransparent?: boolean,
    animationType?: string,
    androidMode?: string,
    placeHolderText?: string,
    placeholder?: string,
    textStyle?: Object,
    placeHolderTextStyle?: Object,
    onDateChange?: Function,
    disabled?: boolean,
    format: string,
    value: string,
}

const DatePicker = (props: DatePickerPropsType) => {
    return (
        <View style={datePickerStyles.container}>
            <Text style={datePickerStyles.text}>{props.value ? props.value : props.placeholder}</Text>
            <NBDatePicker
                {...props}
                defaultDate={DateTime.fromFormat(props.value, props.format).toJSDate()}
                textStyle={datePickerStyles.datePicker}
                placeHolderText={null}
            />
        </View>
    );
};

const datePickerStyles: StyleSheetType = StyleSheet.create({
    container: {
        padding: 5,
    },
    text: {
        position: 'absolute',
        top: 15,
        left: 5,
    },
    datePicker: {
        opacity: 0,
    },
});

export default DatePicker;
