// @flow
import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import HTMLRenderer from 'react-native-render-html';
import theme from '@themes/native-base/variables/platform';

import type {StyleSheetType} from '@types/base';

type TextModulePropsType = {
    text: string,
}

const TextModule = ({text}: TextModulePropsType) => {
    return (
        <View style={textModuleStyles.container}>
            <HTMLRenderer
                html={text}
                imagesMaxWidth={Dimensions.get('window').width}
                tagsStyles={htmlStyles}
            />
        </View>
    );
};

const textModuleStyles: StyleSheetType = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 10,
    },
});

const htmlStyles = {
    p: {
        color: theme.strongText,
    },
};

export default TextModule;
