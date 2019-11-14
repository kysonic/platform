// @flow
import React from 'react';
import {Body, Button, Header, Icon, Right, Title, ActionSheet} from 'native-base';
import authStore from '@stores/auth';

import type {_NavigationInjectedProps} from 'react-navigation';

const BUTTONS = ['Profile', 'Logout', 'Cancel'];
const CANCEL_INDEX = 2;

const actions = [
    (navigation: _NavigationInjectedProps): void => {
        navigation.navigate('Profile');
    },
    (navigation: _NavigationInjectedProps): void => {
        authStore.logout();
    },
];

const openActionSheet = (navigation: _NavigationInjectedProps): void => {
    ActionSheet.show(
        {
            options: BUTTONS,
            cancelButtonIndex: CANCEL_INDEX,
            title: 'Menu',
        },
        buttonIndex => {
            if (actions[buttonIndex] && typeof actions[buttonIndex] === 'function') {
                actions[buttonIndex](navigation);
            }
        }
    );
};

type PropsType = {
    title?: string,
    navigation: _NavigationInjectedProps
};

const AppHeader = ({title = '', navigation} : PropsType) => {
    return (
        <Header>
            <Body>
                <Title>{title}</Title>
            </Body>
            <Right>
                <Button transparent onPress={() => openActionSheet(navigation)}>
                    <Icon type="Feather" name="more-vertical" />
                </Button>
            </Right>
        </Header>
    );
};

export default AppHeader;
