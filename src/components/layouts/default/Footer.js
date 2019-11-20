import React from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';

const AppFooter = (props) => {
    return (
        <Footer>
            <FooterTab>
                <Button full>
                    <Text>Footer</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
};

export default AppFooter;
