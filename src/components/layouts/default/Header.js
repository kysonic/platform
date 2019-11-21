// @flow
import React from 'react';
import {Left, Body, Button, Header, Icon, Right, Title} from 'native-base';
import {StyleSheet} from 'react-native';
import theme from '@themes/native-base/variables/platform';

import type {_NavigationInjectedProps} from 'react-navigation';

type PropsType = {
    options?: Object,
    navigation: _NavigationInjectedProps
};

const AppHeader = ({options: {icon, title, action} = {}, navigation} : PropsType) => {
    return (
        <Header>
            <Left style={appHeaderStyles.left}>
                { icon ? <Icon style={appHeaderStyles.leftIcon} type="Feather" name={icon} /> : null }
                { title ? <Title style={appHeaderStyles.leftTitle}>{title}</Title> : null }
            </Left>
            <Body>

            </Body>
            <Right>
                {action ? (
                    <Button transparent>
                        <Icon style={appHeaderStyles.actionIcon} type="Feather" name={action} />
                    </Button>
                ) : null}
            </Right>
        </Header>
    );
};

const appHeaderStyles = StyleSheet.create({
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    leftIcon: {
        marginLeft: 10,
        color: theme.toolbarBtnTextColor,
    },
    leftTitle: {
        marginLeft: 10,
    },
    actionIcon: {
        fontSize: 25,
        marginRight: 5,
    },
});

export default AppHeader;
