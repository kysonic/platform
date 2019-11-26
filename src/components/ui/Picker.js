// @flow
import React from 'react';
import {StyleSheet} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import theme from '@themes/native-base/variables/platform';

import type {StyleSheetType} from '@types/base';

type PickerPropsType = {
    initValue?: mixed,
    accessible?: boolean,
    scrollViewAccessibilityLabel?: string,
    cancelButtonAccessibilityLabel?: string,
    style: StyleSheetType,
    data: Array<mixed>,
}

const Picker = (props: PickerPropsType) => {
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
