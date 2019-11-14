import React from 'react';
import {Container, Content} from 'native-base';
import TodoList from '@components/demo/TodoList';
import {ConnectHeader} from '@utils/navigation';

const HomeScreen = () => {
    return (
        <Container>
            <Content>
                <TodoList/>
            </Content>
        </Container>
    );
};

ConnectHeader(HomeScreen);

export default HomeScreen;
