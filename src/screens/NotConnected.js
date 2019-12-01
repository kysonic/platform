import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'native-base';
import theme from '@themes/native-base/variables/platform';
import NetInfo from '@react-native-community/netinfo';

const NotConnectedScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Please connect to the network...</Text>
            <Button style={styles.button} onPressed={NetInfo.fetch()}>
                <Text>Try to reconnect</Text>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        color: theme.strongText,
    },
    button: {
        marginTop: 20,
    },
});

export default NotConnectedScreen;
