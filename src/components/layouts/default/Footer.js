import React from 'react';
import {Footer, FooterTab, Button, Text, Icon} from 'native-base';

const AppFooter = ({navigation}) => {
    return (
        <Footer>
            <FooterTab>
                <Button vertical active={navigation.state.routeName === 'Home'}>
                    <Icon type="Feather" name="home" />
                </Button>
                <Button vertical active={navigation.state.routeName === 'News'}>
                    <Icon type="Feather" name="book-open" />
                </Button>
                <Button vertical active={navigation.state.routeName === 'Inbox'}>
                    <Icon type="Feather" name="inbox" />
                </Button>
                <Button vertical active={navigation.state.routeName === 'Menu'}>
                    <Icon type="Feather" name="menu" />
                </Button>
            </FooterTab>
        </Footer>
    );
};

export default AppFooter;
