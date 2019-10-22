import React from 'react';
import {Body, Button, Header, Icon, Right, Title} from 'native-base';

const AppHeader = ({title = 'TRASH'}) => {
    return (
        <Header>
            <Body>
                <Title>{title}</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon type="Feather" name="more-vertical"/>
                </Button>
            </Right>
        </Header>
    );
};

export default AppHeader;
