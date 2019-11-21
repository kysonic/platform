// @flow
import React from 'react';
import {Text} from 'react-native';
import {ConnectHeader} from '@utils/navigation';

const NewsScreen = ({navigation}) => {
    return (
        <Text>News</Text>
    );
};

ConnectHeader(NewsScreen, {title: 'News', icon: 'book-open'});

export default NewsScreen;
