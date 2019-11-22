// @flow
import React, {useState} from 'react';
import {reaction} from 'mobx';
import {View, InteractionManager} from 'react-native';
import globalStore from '@stores/global';
import {setStatusBar} from '@utils/status-bar';
import theme from '@themes/native-base/variables/platform';

function customizeStatusBar() {
    setStatusBar({
        backgroundColor: globalStore.isTranslucentStatusBar ? 'transparent' : theme.toolbarDefaultBg,
        barStyle: globalStore.isTranslucentStatusBar ? 'light-content' : 'dark-content',
        isHidden: !globalStore.statusBarEnabled,
        isTranslucent: globalStore.isTranslucentStatusBar,
    });
}

const StatusBar = () => {

    InteractionManager.runAfterInteractions(() => {
        customizeStatusBar();
    });

    return (
        <View></View>
    );
};

export default StatusBar;
