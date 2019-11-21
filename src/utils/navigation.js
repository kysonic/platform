// @flow
import React from 'react';
import AppHeader from '@layouts/default/Header';

import type {NavigationScreenProp, _NavigationInjectedProps} from 'react-navigation';

type PropsType = {
    navigation: _NavigationInjectedProps
}

export function ConnectHeader(Screen: NavigationScreenProp, options) {
    Screen.navigationOptions = ({navigation} : PropsType) => (
        {
            header: () => (
                <AppHeader navigation={navigation} options={options} />
            ),
            headerLeft: false,
            headerMode: 'float',
        }
    );
}

export function WithoutHeader(Screen: NavigationScreenProp) {
    Screen.navigationOptions = () => (
        {
            header: () => null,
            tabBarVisible: false,
        }
    );
}
