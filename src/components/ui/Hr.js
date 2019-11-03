import React from 'react';
import {View, StyleSheet} from 'react-native';
import theme from '@themes/native-base/variables/platform';

const Hr = () => {
    return (
        <View
            style={styles.line}
        />
    );
};

const styles = StyleSheet.create({
    line: {
        borderBottomColor: theme.toolbarDefaultBorder,
        borderBottomWidth: theme.borderWidth,
    },
});

export default Hr;
