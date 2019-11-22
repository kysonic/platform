// @flow
import theme from '@themes/native-base/variables/platform';
import {Platform, StatusBar} from 'react-native';

type statusBarOptionsType = {
    backgroundColor: string,
    isTranslucent: boolean,
    barStyle: 'dark-content' | 'light-content',
    isHidden: boolean,
}

export function setStatusBar({
                                 backgroundColor = theme.toolbarDefaultBg,
                                 isTranslucent = false,
                                 barStyle = 'dark-content',
                                 isHidden = false}: statusBarOptionsType) {
    if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(backgroundColor);
        StatusBar.setTranslucent(isTranslucent);
        StatusBar.setBarStyle( barStyle,true);
        StatusBar.setHidden(isHidden);
    }
}
