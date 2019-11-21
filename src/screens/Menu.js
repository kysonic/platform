// @flow
import React from 'react';
import {StyleSheet} from 'react-native';
import {Body, Container, Content, Icon, Left, ListItem, Right, Text} from 'native-base';
import {ConnectHeader} from '@utils/navigation';
import theme from '@themes/native-base/variables/platform';
import ProfilePlate from '@components/ui/ProfilePlate';
import userStore from '@stores/user';
import authStore from '@stores/auth';
import ListMenu from '@components/ui/ListMenu';
import {useObserver} from 'mobx-react-lite';

const MENU_ITEMS = [
    {
        title: 'Tickets',
        icon: 'shopping-bag',
    },
    {
        title: 'Schedule',
        icon: 'list',
    },
    {
        title: 'Team',
        icon: 'users',
    },
    {
        title: 'Video',
        icon: 'video',
    },
    {
        title: 'Shop',
        icon: 'shopping-cart',
    },
    {
        title: 'Social',
        icon: 'twitter',
    },
    {
        title: 'Club',
        icon: 'anchor',
    },
];

const MenuScreen = ({navigation}) => {
    return useObserver(() => (
        <Container style={menuScreenStyles.container}>
            <Content>
                <ProfilePlate user={userStore.user} onPress={() => navigation.navigate('Profile')}/>
                <ListMenu items={MENU_ITEMS}/>
                <ListItem style={menuScreenStyles.logout} icon onPress={() => authStore.logout()}>
                    <Left>
                        <Icon style={menuScreenStyles.icon} type="Feather" name="log-out"/>
                    </Left>
                    <Body style={menuScreenStyles.noBorderBottom}>
                        <Text style={menuScreenStyles.text} note>Logout</Text>
                    </Body>
                    <Right style={menuScreenStyles.noBorderBottom}>
                        <Icon type="Feather" name="chevron-right"/>
                    </Right>
                </ListItem>
            </Content>
        </Container>
    ));
};

const menuScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.containerBgColor,
    },
    logout: {
        marginTop: 10,
        marginLeft: 0,
        backgroundColor: theme.brandLight,
        ...theme.boxShadow,
    },
    icon: {
        color: theme.listNoteColor,
        fontSize: 23,
        marginLeft: 15,
    },
    text: {
        fontWeight: 'bold',
    },
    noBorderBottom: {
        borderBottomWidth: 0,
    },
});

ConnectHeader(MenuScreen, {title: 'Menu', action: 'settings'});

export default MenuScreen;
