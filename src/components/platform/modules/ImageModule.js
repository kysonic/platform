// @flow
import React, {useState} from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, Dimensions, Linking} from 'react-native';
import {getCloudinaryPath} from '@utils/cloudinary';
import imagePlaceholder from '@assets/img/placeholders/image.png';
import theme from '@themes/native-base/variables/platform';

import type {CloudinaryImageType, LinkType} from '@types/base';

type ImageModulePropsType = {
    description: string,
    image: CloudinaryImageType,
    link: LinkType,
}

const ImageModule = ({description, image, link}: ImageModulePropsType) => {
    const [error, setError] = useState(false);

    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;

    return (
        <TouchableOpacity onPress={() => link.url ? Linking.openURL(link.url) : null} style={imageModuleStyles.container}>
            <Image
                style={{ height: imageHeight, width: imageWidth }}
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
    },
    text: {
        marginTop: 5,
        color: theme.weakText,
    },
});

export default ImageModule;
