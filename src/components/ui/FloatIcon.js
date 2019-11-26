// @flow
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import theme from '@themes/native-base/variables/platform';

import type {StyleSheetType, ReactChildren} from '@types/base';

type PropsType = {
    children: ReactChildren,
    style?: StyleSheetType,
    iconStyle?: StyleSheetType,
    isShown?: boolean,
    icon?: string,
}

const FloatIcon = ({children, style, iconStyle, isShown, icon = 'check'}: PropsType) => {
    const [height, setHeight] = React.useState(0);
    (height: number);

    return (
        // $FlowFixMe
        <View style={[styles.container, style]} onLayout={(event) => setHeight(event.nativeEvent?.layout?.height)}>
            {children}
            {isShown ? (
                <Icon style={[styles.icon, {top: (height / 2) - (theme.fabIconSize / 2)}, iconStyle]} type="Feather" name={icon} />
            ) : null}
        </View>
    );
};

const styles: StyleSheetType = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
    },
    icon: {
        position: 'absolute',
        right: 0,
        color: theme.brandPrimary,
    },
});

export default FloatIcon;
