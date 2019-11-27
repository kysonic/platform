// @flow
import React, {useRef, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {PageStore} from '@stores/page';
import {useObserver} from 'mobx-react-lite';
import {Text, Spinner} from 'native-base';
import theme from '@themes/native-base/variables/platform';
import Module from '@components/platform/Module';

import type {StyleSheetType} from '@types/base';

type PagePropsType = {
    url: string,
}

const Page = ({url}: PagePropsType) => {

    const storeRef = useRef(PageStore(url));

    useEffect(() => {
        storeRef.current.fetch();
    }, []);

    return useObserver(() => {

        if (storeRef.current?.isLoading) {
            return  (
                <View style={pageStyles.spinnerContainer}>
                    <Spinner color={theme.brandPrimary} />
                </View>
            );
        }

        return (
            storeRef.current.content.map((module, index) => (<Module key={index} data={module} />))
        );
    });
};

const pageStyles: StyleSheetType = StyleSheet.create({
    spinnerContainer: {
        height: Dimensions.get('window').height - 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Page;
