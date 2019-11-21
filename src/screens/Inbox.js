// @flow
import React from 'react';
import {Text} from 'react-native';
import {ConnectHeader} from '@utils/navigation';

const InboxScreen = ({navigation}) => {
    return (
        <Text>Inbox</Text>
    );
};

ConnectHeader(InboxScreen, {title: 'Inbox', icon: 'inbox'});

export default InboxScreen;
