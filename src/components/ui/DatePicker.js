// @flow
import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'native-base';
import {DateTime} from 'luxon';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import theme from '@themes/native-base/variables/platform';

import type {StyleSheetType} from '@types/base';

type DatePickerPropsType = {
    value?: Date,
    minimumDate?: Date,
    maximumDate?: Date,
    locale?: string,
    is24Hour?: boolean,
    minuteInterval?: number,
    format?: string,
    placeholder?: string,
    textStyle?: StyleSheetType,
    onChange?: Function,
}

const DatePicker = (props: DatePickerPropsType) => {
    const [opened, setOpened] = useState(false);
    (opened: boolean);

    const hideDatePicker = () => {
        setOpened(false);
    };

    const handleConfirm = (date) => {
        if (props.onChange) {
            props.onChange(date);
        }
        hideDatePicker();
    };

    return (
        <View style={datePickerStyles.container}>
            <TouchableOpacity onPress={() => setOpened(true)} >
                <Text style={[datePickerStyles.text, props.textStyle]}>{props.value ? props.value : props.placeholder}</Text>
            </TouchableOpacity>
            {opened ? <DateTimePickerModal
                {...props}
                date={DateTime.fromFormat(props.value, props.format).toJSDate()}
                headerTextIOS={props.placeholder}
                isVisible={opened}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            /> : null}
        </View>
    );
};

const datePickerStyles: StyleSheetType = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 5,
        flex: 1,
    },
    selectDateText: {
        textAlign: 'center',
        color: theme.tabBarTextColor,
    },
    datePicker: {
        width: '100%',
    },
    text: {
        fontSize: 16,
        color: theme.strongText,
    },
});

export default DatePicker;
