// @flow
import React from 'react';
import {Container, Content} from 'native-base';

const Layout = ({children, navigation}) => {
    return (
        <Container style={{flex: 1}}>
            <Content>
                {children}
            </Content>
        </Container>
    );
};

export default Layout;
