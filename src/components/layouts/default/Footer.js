import React from 'react';
import {Footer, FooterTab, Button, Icon} from 'native-base';
import {NavigationActions} from 'react-navigation';
import globalStore from '@stores/global';
import {useObserver} from 'mobx-react-lite';

const navigateTo = (navigationContainer, screen) => {
    navigationContainer.dispatch(
        NavigationActions.navigate({ routeName: screen })
    );
};

const AppFooter = ({navigationContainer, hidden}) => {
    return useObserver(() => (
            <Footer>
                <FooterTab>
                    <Button vertical active={globalStore.route === 'Home'} onPress={() => navigateTo(navigationContainer, 'Home')} >
                        <Icon type="Feather" name="home" />
                    </Button>
                    <Button vertical active={globalStore.route === 'News'} onPress={() => navigateTo(navigationContainer,'News')} >
                        <Icon type="Feather" name="book-open" />
                    </Button>
                    <Button vertical active={globalStore.route === 'Inbox'} onPress={() => navigateTo(navigationContainer,'Inbox')} >
                        <Icon type="Feather" name="inbox" />
                    </Button>
                    <Button vertical active={globalStore.route === 'Menu'} onPress={() => navigateTo(navigationContainer,'Menu')} >
                        <Icon type="Feather" name="menu" />
                    </Button>
                </FooterTab>
            </Footer>
    ));
};

export default AppFooter;
