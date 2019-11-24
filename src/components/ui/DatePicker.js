// @flow
import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'native-base';
import {DateTime} from 'luxon';
import DateTimePicker from '@react-native-community/datetimepicker';

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

const DatePicker = (props: DatePickerPropsType) => {
    const [opened, setOpened] = useState(false);
    (opened: boolean);

    return (
        <TouchableOpacity onPress={() => setOpened(true)} style={datePickerStyles.container}>
            <Text style={datePickerStyles.text}>{props.value ? props.value : props.placeholder}</Text>
            {opened ? <DateTimePicker
                {...props}
                onChange={(e, v) => {
                    setOpened(false);
                    if (props.onChange) {
                        props.onChange(e,v);
                    }
                }}
                value={DateTime.fromFormat(props.value, props.format).toJSDate()}
            /> : null}
        </TouchableOpacity>
    );
};

const datePickerStyles: StyleSheetType = StyleSheet.create({
    container: {
        padding: 5,
    },
    text: {
    },
    datePicker: {
        opacity: 0,
    },
});

export default DatePicker;
