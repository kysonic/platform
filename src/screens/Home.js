import React from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text
} from 'native-base';
import TodoList from '@components/TodoList';
import firebase from 'react-native-firebase';

const HomeScreen = ({navigation: {navigate}}) => {
    firebase.auth()
        .signInAnonymously()
        .then(credential => {
            if (credential) {
                console.log('default app user ->', credential.user.toJSON());
            }
        });
    return (
        <Container>
            <Content>
                <TodoList/>
            </Content>
            <Footer>
                <FooterTab>
                    <Button full>
                        <Text>Footer</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};

HomeScreen.navigationOptions = ({navigation}) => (
    {
        header: () => (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu'/>
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right/>
            </Header>
        )
    }
);

export default HomeScreen;
