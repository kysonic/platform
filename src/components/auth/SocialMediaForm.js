// @flow
import React from 'react';
import {View} from 'react-native';
import SocialMediaIcons from '@components/ui/SocialMediaIcons';
import authStore from '@stores/auth/auth-store';
import {capitalizeFirst} from '@utils/string';

const SocialMediaForm = () => {

    const loginWithSocialMedia = (social: string) => {
        authStore[`loginWith${capitalizeFirst(social)}`]();
    };

    return (
        <View>
            <SocialMediaIcons onIconPress={loginWithSocialMedia} />
        </View>
    );
};

export default SocialMediaForm;
