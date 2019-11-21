// @flow
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Body, Icon, Left, ListItem, Right, Text} from 'native-base';
import theme from '@themes/native-base/variables/platform';

const ListMenu = ({items}) => {
    return (
        <View style={listMenuStyles.menu}>
            {items.map(({icon, title}) =>  (
                <ListItem style={listMenuStyles.listItem} icon>
                    <Left style={listMenuStyles.borderBottom}>
                        <Icon style={listMenuStyles.icon} type="Feather" name={icon} />
                    </Left>
                    <Body style={listMenuStyles.borderBottom}>
                        <Text note>{title}</Text>
                    </Body>
                    <Right style={listMenuStyles.borderBottom}>
                        <Icon type="Feather" name="chevron-right" />
                    </Right>
                </ListItem>
            ))}
        </View>
    );
};

const listMenuStyles = StyleSheet.create({
    menu: {
        marginTop: 10,
        backgroundColor: theme.brandLight,
        ...theme.boxShadow,
        borderColor: 'red',
    },
    listItem: {
        marginLeft: 0,
    },
    icon: {
        color: theme.listNoteColor,
        fontSize: 23,
        marginLeft: 15,
    },
    borderBottom: {
        borderColor: theme.containerBgColor,
        borderBottomWidth: 1,
    },
});

export default ListMenu;
