import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import placeholderAvatar from '@assets/img/placeholders/avatar.jpg';
import theme from '@themes/native-base/variables/platform';

import type {StyleSheetType} from '@types/base';

type PropsType = {
    uri: string,
    style: StyleSheetType,
}

const Avatar = ({uri = '', style}: PropsType) => {
    const [isError, setIsError] = useState(false);
    (isError: boolean);

    return (
        <Image
            style={[styles.image, style]}
            source={(!isError && uri) ? {uri} : placeholderAvatar}
            onError={(e) => setIsError(true)}
        />
    );
};

const AVATAR_SIZE = 80;

const styles: StyleSheetType = StyleSheet.create({
    image: {
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        borderRadius: AVATAR_SIZE / 2,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: theme.brandPrimary,
    },
});

export default Avatar;
