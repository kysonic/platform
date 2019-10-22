import React from 'react';
import AppHeader from '@layouts/default/Header';

export function ConnectHeader(Screen) {
    Screen.navigationOptions = ({navigation}) => (
        {
            header: () => <AppHeader navigation={navigation} />
        }
    );
}
