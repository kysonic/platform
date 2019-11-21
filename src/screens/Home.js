import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'native-base';
import TodoList from '@components/demo/TodoList';
import authStore from '@stores/auth';
import {ConnectHeader} from '@utils/navigation';

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <TodoList/>
            <Button onPress={() => authStore.logout()}>
                <Text>Logout</Text>
            </Button>
        </View>
    );
};

ConnectHeader(HomeScreen, {title: 'Home', icon: 'home', action: 'search'});

export default HomeScreen;
