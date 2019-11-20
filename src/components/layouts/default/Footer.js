import React from 'react';
import {Footer, FooterTab, Button, Text, Icon} from 'native-base';

const AppFooter = ({navigation}) => {
    return (
        <Footer>
            <FooterTab>
                <Button vertical active={navigation.state.routeName === 'Home'}>
                    <Icon type="Feather" name="home" />
                    <Text>Home</Text>
                </Button>
                <Button vertical active={navigation.state.routeName === 'News'}>
                    <Icon type="Feather" name="book-open" />
                    <Text>News</Text>
                </Button>
                <Button vertical active={navigation.state.routeName === 'Inbox'}>
                    <Icon type="Feather" name="inbox" />
                    <Text>Inbox</Text>
                </Button>
                <Button vertical active={navigation.state.routeName === 'Menu'}>
                    <Icon type="Feather" name="menu" />
                    <Text>Menu</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
};

export default AppFooter;
