// @flow
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Left, Body, Button, Header, Icon, Right, Title} from 'native-base';
import {StyleSheet} from 'react-native';
import theme from '@themes/native-base/variables/platform';

import type {_NavigationInjectedProps} from 'react-navigation';

type PropsType = {
    options?: Object,
    navigation: _NavigationInjectedProps
};

const AppHeader = ({options: {icon, title, action, back} = {}, navigation} : PropsType) => {
    return (
        <Header>
            <Left style={appHeaderStyles.left}>
                {back ? (
                    <TouchableOpacity transparent onPress={() => navigation.goBack()}>
                        <Icon style={appHeaderStyles.backIcon} type="Feather" name="arrow-left" />
                    </TouchableOpacity>
                ) : null}
                { icon ? <Icon style={appHeaderStyles.leftIcon} type="Feather" name={icon} /> : null }
                { title ? <Title style={appHeaderStyles.leftTitle}>{title}</Title> : null }
            </Left>
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
        marginLeft: 5,
        color: theme.toolbarBtnTextColor,
    },
    leftTitle: {
        marginLeft: 10,
    },
    actionIcon: {
        fontSize: 25,
        marginRight: 0,
    },
    backIcon: {
        color: theme.toolbarBtnTextColor,
        fontSize: 25,
        marginLeft: 5,
    },
});

export default AppHeader;
