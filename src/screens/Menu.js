// @flow
import React from 'react';
import {Text} from 'react-native';
import {ConnectHeader} from '@utils/navigation';

const MenuScreen = ({navigation}) => {
    return (
        <Text>Menu</Text>
    );
};

ConnectHeader(MenuScreen, {title: 'Menu', icon: 'menu'});

export default MenuScreen;
