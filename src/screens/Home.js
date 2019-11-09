import React, {useEffect} from 'react';
import {Container, Content, Footer, FooterTab, Button, Text} from 'native-base';
import TodoList from '@components/demo/TodoList';
import {ConnectHeader} from '@utils/navigation';
import firestore from '@react-native-firebase/firestore';

const getUsers = async () => {
    try {
        console.log('1');
        const querySnapshot = await firestore()
            .collection('users')
            .get();
        console.log(2);
        console.log('Total users', querySnapshot.size);
        console.log('User Documents', querySnapshot.docs);
    } catch (err) {
        console.log(err);
    }
}

const HomeScreen = ({navigation: {navigate}}) => {

    useEffect(() => {
        getUsers();
    }, []);

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
