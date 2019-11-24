// @flow
import React from 'react';
import {Text, View} from 'react-native';
import {ConnectHeader} from '@utils/navigation';

const InboxScreen = ({navigation}) => {
    return (
        <View>
            <Text>Inbox</Text>
        </View>
    );
};

ConnectHeader(InboxScreen, {title: 'Inbox', icon: 'inbox'});

export default InboxScreen;
