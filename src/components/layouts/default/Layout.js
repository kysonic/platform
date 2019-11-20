// @flow
import React from 'react';
import {Container, Content} from 'native-base';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children, navigation}) => {
    return (
        <Container>
            <Header navigation={navigation} />
            <Content>
                {children}
            </Content>
            <Footer navigation={navigation} />
        </Container>
    );
};

export default Layout;
