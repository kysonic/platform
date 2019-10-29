// @flow
import * as React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import SocialIcons from '@icons/social';
// $FlowFixMe
import theme from '@themes/native-base/variables/platform';

import type { StyleSheetType } from '@types/base';
import type {PressEvent} from 'react-native/Libraries/Types/CoreEventTypes';

const DEFAULT_SOCIAL_NETWORK = ['google', 'facebook'];
type PropsType = {
    socials?: Array<string>,
    onIconPress?: (social: string, ev?: PressEvent) => any
};

const SocialMedia = ({socials = DEFAULT_SOCIAL_NETWORK, onIconPress = () => {}}: PropsType) => {
    return (
        <View style={styles.container}>
            {socials.map((social: string) => (
                <TouchableOpacity style={styles.item} onPress={(ev: PressEvent) => onIconPress(social, ev)}>
                    {/* $FlowFixMe */}
                    <Image style={styles.img} source={SocialIcons[social] ? SocialIcons[social] : SocialIcons.placeholder}></Image>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles: StyleSheetType = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    item: {
        width: 72,
        height: 72,
        borderWidth: 1,
        padding: 10,
        borderColor: theme.socialIconsBorderColor,
        borderRadius: 10,
    },
    img: {
        width: '100%',
        height: '100%',
    },
});

export default SocialMedia;
