// @flow
import React from 'react';
import {reaction} from 'mobx';
import {InteractionManager} from 'react-native';
import globalStore from '@stores/global';
import {setStatusBar} from '@utils/status-bar';
import theme from '@themes/native-base/variables/platform';

function customizeStatusBar() {
    setTimeout(() => {
        setStatusBar({
            backgroundColor: globalStore.isTranslucentStatusBar ? 'transparent' : theme.toolbarDefaultBg,
            barStyle: globalStore.isTranslucentStatusBar ? 'light-content' : 'dark-content',
            isHidden: !globalStore.statusBarEnabled,
            isTranslucent: globalStore.isTranslucentStatusBar,
        });
    });
}

const StatusBar = () => {

    InteractionManager.runAfterInteractions(() => {
        customizeStatusBar();
    });

    reaction(
        () => globalStore.route,
        () => customizeStatusBar()
    );

    return null;
};

export default StatusBar;
