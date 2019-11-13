import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import placeholderAvatar from '@assets/img/placeholders/avatar.jpg';

import type {StyleSheetType} from '@types/base';

type PropsType = {
    uri: string
}

const Avatar = ({uri = ''}: PropsType) => {
    const [isError, setIsError] = useState(false);
    (isError: boolean);

    return (
        <Image
            style={styles.image}
            source={(!isError && uri) ? {uri} : placeholderAvatar}
            onError={(e) => setIsError(true)}
        />
    );
};

const styles: StyleSheetType = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: 'red',
    },
});

export default Avatar;
