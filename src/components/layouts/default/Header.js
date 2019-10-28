import React from 'react';
import {Body, Button, Header, Icon, Right, Title, ActionSheet} from 'native-base';
import authStore from '@stores/auth/auth-store';

const BUTTONS = ['Logout', 'Cancel'];
const CANCEL_INDEX = 1;

const actions = [
    () => {
        authStore.logout();
    },
];

const openActionSheet = () => {
    ActionSheet.show(
        {
            options: BUTTONS,
            cancelButtonIndex: CANCEL_INDEX,
            title: 'Menu',
        },
        buttonIndex => {
            actions[buttonIndex]();
        }
    );
};

const AppHeader = ({title = 'TRASH'}) => {
    return (
        <Header>
            <Body>
                <Title>{title}</Title>
            </Body>
            <Right>
                <Button transparent onPress={openActionSheet}>
                    <Icon type="Feather" name="more-vertical" />
                </Button>
            </Right>
        </Header>
    );
};

export default AppHeader;
