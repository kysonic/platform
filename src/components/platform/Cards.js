// @flow
import React from 'react';
import {StyleSheet} from 'react-native';
import {CardHeader, CardBody, CardFooter} from '@components/ui/Cards';
import {Card, CardItem, Text} from 'native-base';
import photoCover from '@assets/img/placeholders/photo.png';
import {getCloudinaryPath} from '@utils/cloudinary';
import theme from '@themes/native-base/variables/platform';
import {capitalizeFirst} from '@utils/string';

type PhotoCardPropsType = {
    item: any,
}

function tagsString(tags) {
    return tags.map((tag) => tag.title).join(', ');
}

export const PhotoCard = ({item: {title, displayDate, image, tags}}: PhotoCardPropsType) => {
    return (
        <Card>
            <CardHeader
                thumb={photoCover}
                headerTitle={title}
                headerSubTitle={displayDate}
                style={photoCardStyles.header}
                thumbStyle={photoCardStyles.thumb}
            />
            <CardBody
                imageSource={{uri: getCloudinaryPath(image)}}
            />
            <CardFooter
                footerIcon="tag"
                footerLeftText="Tags:"
                footerRightText={tagsString(tags)}
            />
        </Card>
    );
};

const photoCardStyles = StyleSheet.create({
    header: {
        padding: 0,
    },
    thumb: {
        marginLeft: -10,
    },
});

type SocialCardPropsType = {
    item: any,
}

export const SocialCard = ({item: {title, displayDate, post}}: SocialCardPropsType) => {
    return (
        <Card>
            <CardHeader
                thumb={{uri: post.author?.avatar?.url}}
                headerTitle={title}
                headerSubTitle={displayDate}
                style={photoCardStyles.header}
                thumbStyle={photoCardStyles.thumb}
            />
            <CardItem style={socialCardStyles.body} cardBody>
                <Text style={socialCardStyles.text}>{post.content?.text?.plain}</Text>
            </CardItem>
            <CardFooter
                footerIcon={post.source}
                footerLeftText={capitalizeFirst(post.source)}
                footerRightText="Open"
            />
        </Card>
    );
};

const socialCardStyles = StyleSheet.create({
    body: {
        padding: 20,
    },
    text: {
        color: theme.strongText,
    },
});

const CardsByType = {
    'Corebine.Core.Card.Photo': PhotoCard,
    'Corebine.Core.Card.Social': SocialCard,
};

type CardsPropsType = {
    items: any,
}

const Cards = ({items}: CardsPropsType) => {
    return items.map((item: any, index: number) => {
        const CardComponent = CardsByType[item._type];
        return CardComponent ? (
            <CardComponent key={index} item={item} />
        ) : null;
    });
};

export default Cards;
