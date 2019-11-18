import React from 'react';
import {View, StyleSheet} from 'react-native';
import theme from '@themes/native-base/variables/platform';

const Hr = ({style}) => {
    return (
        <View
            style={[styles.line, style]}
        />
    );
};

const styles = StyleSheet.create({
    line: {
        width: '90%',
        borderBottomColor: theme.lineColor,
        borderBottomWidth: 1,
    },
});

export default Hr;
