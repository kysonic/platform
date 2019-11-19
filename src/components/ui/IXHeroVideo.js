// @flow
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import heroVideo from '@assets/video/ix-hero.mp4';

import type {StyleSheetType} from '@types/base';

const { height } = Dimensions.get('window');

const IXHeroVideo = () => {

    return (
        <Video
            source={heroVideo}
            style={ixHeroVideoStyles.backgroundVideo}
            fullscreen={true} muted={true}
            repeat={true}
            resizeMode="cover"
        />
    );
};

const ixHeroVideoStyles: StyleSheetType = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: 'stretch',
        height: height,
    },
});

export default IXHeroVideo;
