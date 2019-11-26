import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import placeholderAvatar from '@assets/img/placeholders/avatar.jpg';

import type {StyleSheetType} from '@types/base';

type PropsType = {
    uri: string,
    style: StyleSheetType,
    size?: number,
}

const Avatar = ({uri = '', style, size = 50}: PropsType) => {
    const [isError, setIsError] = useState(false);
    (isError: boolean);

    const sizeStyles = {
        width: size,
        height: size,
        borderRadius: size / 2,
    };

    return (
        <Image
            style={[styles.image, style, sizeStyles]}
            source={(!isError && uri) ? {uri} : placeholderAvatar}
            onError={(e) => setIsError(true)}
        />
    );
};

const styles: StyleSheetType = StyleSheet.create({
    image: {
        overflow: 'hidden',
    },
});

export default Avatar;
