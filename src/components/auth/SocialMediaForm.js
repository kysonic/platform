// @flow
import React from 'react';
import {View, StyleSheet} from 'react-native';
import SocialMediaIcons from '@components/ui/SocialMediaIcons';
import authStore from '@stores/auth/auth-store';
import {capitalizeFirst} from '@utils/string';

import type {StyleSheetType} from '@types/base';

type PropsType = {
    style?: StyleSheetType
}

const SocialMediaForm = ({style}: PropsType) => {

    const loginWithSocialMedia = (social: string) => {
        authStore[`loginWith${capitalizeFirst(social)}`]();
    };

    return (
        <View style={styles.container}>
            <SocialMediaIcons style={style} onIconPress={loginWithSocialMedia} />
        </View>
    );
};

const styles: StyleSheetType = StyleSheet.create({
    container: {}
});

export default SocialMediaForm;
