import React, {useEffect} from 'react';
import {Container, Content, Footer, FooterTab, Button, Text} from 'native-base';
import TodoList from '@components/demo/TodoList';
import firebase from 'react-native-firebase';
import {ConnectHeader} from '@utils/navigation';

const HomeScreen = ({navigation: {navigate}}) => {
    return (
        <Container>
            <Content>
                <TodoList/>
                <Text>List of available features</Text>
                <Text>{firebase.database.nativeModuleExists && 'database'}</Text>
                <Text>{firebase.auth.nativeModuleExists && 'auth'}</Text>
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
