// @flow
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Content, Icon, Spinner, Text} from 'native-base';
import {ConnectHeader} from '@utils/navigation';
import theme from '@themes/native-base/variables/platform';
import SwipeableList from '@components/ui/SwipeableList';
import {useObserver} from 'mobx-react-lite';
import notificationStore from '@stores/notification';

import type {StyleSheetType} from '@types/base';
import type {_NavigationInjectedProps} from 'react-navigation';

type InboxScreenPropsType = {
    navigation: _NavigationInjectedProps
}

const InboxScreen = ({navigation}: InboxScreenPropsType) => {

    useEffect(() => {
        notificationStore.fetch();
    }, []);

    return useObserver(() =>
        <Container>
            <Content contentContainerStyle={!notificationStore.notifications.length ? inboxScreenStyles.container : {}}>
                {notificationStore.notifications.length ?
                    (
                        <SwipeableList
                            data={notificationStore.notifications}
                            right={{
                                icon: 'trash-2',
                                onPress: ({item}) => notificationStore.removeNotification(item.id),
                            }}
                        />
                    ) : notificationStore.isLoading ?
                    (
                        <Spinner color={theme.brandPrimary} />
                    ) :
                    (
                        <View style={inboxScreenStyles.noMessages}>
                            <Icon style={inboxScreenStyles.icon} type="Feather" name="inbox"/>
                            <Text style={inboxScreenStyles.text}>Inbox is empty</Text>
                        </View>
                    )
                }
            </Content>
        </Container>
    );
};

const inboxScreenStyles: StyleSheetType = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noMessages: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontSize: 80,
        color: theme.weakText,
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        color: theme.strongText,
        textAlign: 'center',
    },
});

ConnectHeader(InboxScreen, {title: 'Inbox', icon: 'inbox'});

export default InboxScreen;
