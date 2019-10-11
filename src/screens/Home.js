import React from 'react';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';

const HomeScreen = ({navigation: {navigate}}) => {
    return (
        <Container>
            <Content>
                <Text>
                    This is Content Section
                </Text>
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

HomeScreen.navigatorOptions = {
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

export default HomeScreen;
