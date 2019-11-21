// @flow
import React from 'react';
import {Text, Button} from 'native-base';
import {ConnectHeader} from '@utils/navigation';

const MenuScreen = ({navigation}) => {
    return (
        <Button onPress={() => navigation.navigate('Profile')}>
            <Text>Profile</Text>
        </Button>
    );
};

ConnectHeader(MenuScreen, {title: 'Menu', icon: 'menu', action: 'settings'});

export default MenuScreen;
