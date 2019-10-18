import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Item, Input, Form, Button, Text, Header, Left, Icon, Body, Title, Right} from 'native-base';

const AuthScreen = (props) => {
    return (
        <Container>
            <Content>
                <Form style={styles.form}>
                    <Item style={styles.item}>
                        <Input placeholder="Email" />
                    </Item>
                    <Item>
                        <Input placeholder="Password" />
                    </Item>
                    <Button block style={styles.button}>
                        <Text>Sign in</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({
    form: {
        padding: 10
    },
    item: {
        marginTop: 10
    },
    button: {
        marginTop: 20
    }
});

AuthScreen.navigationOptions = ({navigation}) => (
    {
        header: () => (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu'/>
                    </Button>
                </Left>
                <Body>
                    <Title>Trash | Sign in</Title>
                </Body>
                <Right/>
            </Header>
        )
    }
);

export default AuthScreen;
