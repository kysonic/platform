// @flow
import React from 'react';
import {Container, Content, Icon, Spinner, Text} from 'native-base';
import {ConnectHeader} from '@utils/navigation';
import newsStore from '@stores/news';
import {useObserver} from 'mobx-react-lite';
import Cards from '@components/platform/Cards';
import {StyleSheet, View} from 'react-native';
import theme from '@themes/native-base/variables/platform';

import type {StyleSheetType} from '@types/base';

newsStore.fetch();

const NewsScreen = () => {
    return useObserver(() => {
        return (
            <Container>
                <Content contentContainerStyle={!newsStore.news.length ? newsScreenStyles.container : {}}>
                    {newsStore.news.length ?
                        (
                            <Cards items={newsStore.news}/>
                        ) : newsStore.isLoading ?
                            (
                                <Spinner color={theme.brandPrimary} />
                            ) :
                            (
                                <View style={newsScreenStyles.noMessages}>
                                    <Icon style={newsScreenStyles.icon} type="Feather" name="book-open"/>
                                    <Text style={newsScreenStyles.text}>News are not found...</Text>
                                </View>
                            )
                    }

                </Content>
            </Container>
        );
    });
};

const newsScreenStyles: StyleSheetType = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noMessages: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontSize: 80,
        color: theme.weakText,
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        color: theme.strongText,
        textAlign: 'center',
    },
});

ConnectHeader(NewsScreen, {title: 'News', icon: 'book-open'});

export default NewsScreen;
