// @flow
import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Card as NBCard, CardItem, Button, Thumbnail, Body, Left, Right, Icon, Text} from 'native-base';
import theme from '@themes/native-base/variables/platform';
import placeholderAvatar from '@assets/img/placeholders/avatar.jpg';

export const CardHeader = ({thumb, headerTitle, headerSubTitle, style = {}, thumbStyle = {}}: any) => {
    const [thumbError, setThumbError] = useState(false);

    return (
        <CardItem style={style}>
            <Left>
                {thumb && !thumbError ? (
                    <Thumbnail source={thumb} style={thumbStyle} onError={() => setThumbError(true)} />
                ) : (
                    <Thumbnail source={placeholderAvatar} />
                )}
                <Body>
                    {headerTitle ? <Text style={cardHeaderStyles.title}>{headerTitle}</Text> : null}
                    {headerSubTitle ? <Text style={cardHeaderStyles.subtitle} note>{headerSubTitle}</Text> : null}
                </Body>
            </Left>
        </CardItem>
    );
}

const cardHeaderStyles = StyleSheet.create({
    title: {
        color: theme.strongText,
        fontSize: 15,
    },
});

export const CardBody = ({imageSource}: any) => {
    return (
        <CardItem cardBody>
            <Image
                source={imageSource}
                style={cardBodyStyles.image}
            />
        </CardItem>
    );
}

const cardBodyStyles = StyleSheet.create({
    image: {
        height: 200,
        width: null,
        flex: 1,
    },
});

export const CardFooter = ({footerIcon, footerLeftText, footerRightText}: any) => {
    return (
        <CardItem>
            <Left>
                <Button transparent>
                    {footerIcon ? <Icon type="Feather" name={footerIcon} /> : null}
                    {footerLeftText ? <Text>{footerLeftText}</Text> : null}
                </Button>
            </Left>
            <Right>
                {footerRightText ? <Text note>{footerRightText}</Text> : null}
            </Right>
        </CardItem>
    );
};

type CardsComponentsType = {
    CardHeaderComponent?: Function,
    CardBodyComponent?: Function,
    CardFooterComponent?: Function
}

type CardPropsType = {
    item: any
} & CardsComponentsType;

export const Card = ({item, CardHeaderComponent = CardHeader, CardBodyComponent = CardBody, CardFooterComponent = CardFooter}: CardPropsType) => {
    return (
        <NBCard>
            <CardHeaderComponent {...item} />
            <CardBodyComponent {...item} />
            <CardFooterComponent {...item} />
        </NBCard>
    );
};

type CardsPropsType = {
    items: any
} & CardsComponentsType;

const Cards = ({items, CardHeaderComponent = CardHeader, CardBodyComponent = CardBody, CardFooterComponent = CardFooter}: CardsPropsType) => {
    return items.map((item: any, index: number) => (
        <Card
            key={index}
            item={item}
            CardHeaderComponent={CardHeaderComponent}
            CardBodyComponent={CardHeaderComponent}
            CardFooterComponent={CardHeaderComponent}
        />
    ));
};

export default Cards;
