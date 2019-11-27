// @flow
import React, {useState} from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, Linking} from 'react-native';
import {getCloudinaryPath} from '@utils/cloudinary';
import imagePlaceholder from '@assets/img/placeholders/image.png';
import theme from '@themes/native-base/variables/platform';
import {get916Dimensions} from '@utils/image';

import type {CloudinaryImageType, LinkType} from '@types/base';

type ImageModulePropsType = {
    description: string,
    image: CloudinaryImageType,
    link: LinkType,
}

const ImageModule = ({description, image, link}: ImageModulePropsType) => {
    const [error, setError] = useState(false);

    return (
        <TouchableOpacity onPress={() => link.url ? Linking.openURL(link.url) : null} style={imageModuleStyles.container}>
            <Image
                style={get916Dimensions()}
                // $FlowFixMe
                source={!error ? {uri: getCloudinaryPath(image)} : imagePlaceholder}
                onError={() => setError(true)}
            />
            <Text style={imageModuleStyles.text}>{description}</Text>
        </TouchableOpacity>
    );
};

const imageModuleStyles = StyleSheet.create({
    container: {
        marginBottom: 20,
        backgroundColor: theme.brandLight,
        ...theme.boxShadow,
    },
    text: {
        padding: 20,
        paddingLeft: 5,
        color: theme.weakText,
    },
});

export default ImageModule;
