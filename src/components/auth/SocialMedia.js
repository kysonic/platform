// @flow
import React from 'react';
import {View, Image, StyleSheet, TouchableHighlight} from 'react-native';

import type { StyleSheetType } from '@types/base';
import type {ImageSource} from 'react-native/Libraries/Image/ImageSource';

const DEFAULT_SOCIAL_NETWORK = ['google', 'facebook'];

const ICONS: {[string]: ImageSource} = {
    'google': require('@assets/img/socials/google.png'),
    'facebook': require('@assets/img/socials/facebook.png'),
    'placeholder': require('@assets/img/placeholders/image.jpg'),
};

type PropsType = {
    socials?: Array<string>,
    onIconPress?: () => any
};

const SocialMedia = ({socials = DEFAULT_SOCIAL_NETWORK, onIconPress = () => {}}: PropsType) => {
    return (
        <View>
            {socials.map((social: string) => (
                <TouchableHighlight onPress={(ev) => onIconPress(social, ev)}>
                    <Image source={ICONS[social] ? ICONS[social] : ICONS.placeholder}></Image>
                </TouchableHighlight>
            ))}
        </View>
    );
};

const styles: StyleSheetType = StyleSheet.create({

});

export default SocialMedia;
