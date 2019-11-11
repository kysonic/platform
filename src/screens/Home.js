import React from 'react';
import {Container, Content, Footer, FooterTab, Button, Text} from 'native-base';
import TodoList from '@components/demo/TodoList';
import {ConnectHeader} from '@utils/navigation';

const HomeScreen = ({navigation: {navigate}}) => {
    return (
        <Container>
            <Content>
                <TodoList/>
            </Content>
            <Footer>
                <FooterTab>
                    <Button full onPress={() => navigate('Profile')}>
                        <Text>Footer</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};

ConnectHeader(HomeScreen);

export default HomeScreen;
