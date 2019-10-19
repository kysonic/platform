import React from 'react';
import AuthForm from '@components/Auth/AuthForm';
import {Button, Header, Left, Icon, Body, Title, Right} from 'native-base';
import {View, StyleSheet} from 'react-native';

const AuthScreen = (props) => {
    return (
        <View style={styles.container}>
            <AuthForm style={styles.form} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    form: {
        position: 'relative',
        bottom: 50
    }
});

AuthScreen.navigationOptions = ({navigation}) => (
    {
        header: () => (
            <Header>
                <Body>
                    <Title>Trash | Sign in</Title>
                </Body>
                <Right/>
            </Header>
        )
    }
);

export default AuthScreen;
