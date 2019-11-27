import React, {useState} from 'react';
import {View, StyleSheet, Image, Linking} from 'react-native';
import {Button, Text} from 'native-base';
import Swiper from 'react-native-swiper';
import {get916Dimensions} from '@utils/image';
import {getCloudinaryPath} from '@utils/cloudinary';
import theme from '@themes/native-base/variables/platform';

import imagePlaceholder from '@assets/img/placeholders/image.png';

const CarouselSlide = ({slide: {image, title, subTitle, action}}) => {
    const [error, setError] = useState(false);
    
    return (
        <View style={carouselSlideStyles.container}>
            <Image
                style={get916Dimensions()}
                // $FlowFixMe
                source={!error ? {uri: getCloudinaryPath(image)} : imagePlaceholder}
                onError={() => setError(true)}
            />
            <View style={carouselSlideStyles.footer}>
                <View style={carouselSlideStyles.textContainer}>
                    {title ? <Text style={carouselSlideStyles.title}>{title}</Text> : null}
                    {title ? <Text style={carouselSlideStyles.subTitle}>{subTitle}</Text> : null}
                </View>
                {action ? (
                    <Button onPress={() => action.link?.url ? Linking.openURL(action.link?.url) : null} style={carouselSlideStyles.button}>
                        <Text>{action.caption}</Text>
                    </Button>
                ) : null}
            </View>
        </View>
    );
};

const carouselSlideStyles = StyleSheet.create({
    container: {

    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: theme.strongText,
    },
    subTitle: {
        fontSize: 14,
        color: theme.weakText,
    },
    button: {
        marginTop: 20,
    },
});

const CarouselModule = ({autoRotate, content}) => {
    const {height, width} = get916Dimensions();
    return (
        // $FlowFixMe
        <Swiper
            style={carouselModuleStyles.swiper}
            showsButtons={false}
            autoplay={autoRotate}
            width={width}
            height={height + 180}
            activeDotColor={theme.brandPrimary}
        >
            {
                content.map((slide, index) => (
                    <CarouselSlide key={index} slide={slide} />
                ))
            }
        </Swiper>
    );
};

const carouselModuleStyles = StyleSheet.create({
    swiper: {
        backgroundColor: theme.brandLight,
        ...theme.boxShadow,
    },
});

export default CarouselModule;
