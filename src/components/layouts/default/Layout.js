// @flow
import React from 'react';
import {Container, Content} from 'native-base';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <Container>
            <Header />
            <Content>
                {children}
            </Content>
            <Footer />
        </Container>
    );
};

export default Layout;
