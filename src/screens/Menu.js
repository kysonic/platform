// @flow
import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import {ConnectHeader} from '@utils/navigation';
import theme from '@themes/native-base/variables/platform';
import ProfilePlate from '@components/ui/ProfilePlate';
import userStore from '@stores/user';

const MenuScreen = ({navigation}) => {
    return (
        <Container style={menuScreenStyles.container}>
            <Content>
                <ProfilePlate user={userStore.user} onPress={() => navigation.navigate('Profile')} />
            </Content>
        </Container>
    );
};

const menuScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.containerBgColor,
    },
});

ConnectHeader(MenuScreen, {title: 'Menu', icon: 'menu', action: 'settings'});

export default MenuScreen;
