import React from 'react';
import {Container, Content} from 'native-base';
import {ConnectHeader} from '@utils/navigation';
import Page from '@components/platform/Page';

const HomeScreen = () => {
    return (
        <Container>
            <Content>
                <Page url="https://demo2-web-dev.corebine.com/en/rn/react-native-demo.json" />
            </Content>
        </Container>
    );
};

ConnectHeader(HomeScreen, {title: 'Home', icon: 'home', action: 'search'});

export default HomeScreen;
