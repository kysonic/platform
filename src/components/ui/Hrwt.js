import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';
import Hr from './Hr';
import theme from '@themes/native-base/variables/platform';

const Hrwt = ({text, style}) => {
    return (
        <View style={[styles.container, style]}>
            <Hr style={styles.lineLeft} />
            <Text style={styles.text}>{text}</Text>
            <Hr style={styles.lineRight} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: theme.inverseTextColor,
        backgroundColor: 'transparent',
        padding: 10,
    },
    lineLeft: {
        width: '40%',
        borderBottomColor: theme.lineColor,
        borderBottomWidth: 1,
        marginLeft: 20,
    },
    lineRight: {
        width: '40%',
        borderBottomColor: theme.lineColor,
        borderBottomWidth: 1,
        marginRight: 20,
    },
});

export default Hrwt;
