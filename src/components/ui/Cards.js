// @flow
import React from 'react';
import {View, Image} from 'react-native';
import {Card as NBCard, CardItem, Button, Thumbnail, Body, Left, Right, Icon, Text} from 'native-base';
import thumb from '@assets/img/placeholders/avatar.jpg';

const Cards = ({items}) => {
    return items.map(() => (
        <NBCard>
            <CardItem>
                <Left>
                    <Thumbnail source={thumb} />
                    <Body>
                        <Text>NativeBase</Text>
                        <Text note>GeekyAnts</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image
                    source={{uri: 'https://soliloquywp.com/wp-content/uploads/2016/08/How-to-Set-a-Default-Featured-Image-in-WordPress.png'}}
                    style={{height: 200, width: null, flex: 1}}
                />
            </CardItem>
            <CardItem>
                <Left>
                    <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>12 Likes</Text>
                    </Button>
                </Left>
                <Body>
                    <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>4 Comments</Text>
                    </Button>
                </Body>
                <Right>
                    <Text>11h ago</Text>
                </Right>
            </CardItem>
        </NBCard>
    ));
};

export default Cards;
