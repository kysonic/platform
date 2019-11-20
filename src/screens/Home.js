import React from 'react';
import {Button, Text} from 'native-base';
import TodoList from '@components/demo/TodoList';
import authStore from '@stores/auth';
import Layout from '@layouts/default/Layout';

const HomeScreen = ({navigation}) => {
    return (
        <Layout navigation={navigation}>
            <TodoList/>
            <Button onPress={() => authStore.logout()}>
                <Text>Logout</Text>
            </Button>
        </Layout>
    );
};

export default HomeScreen;
