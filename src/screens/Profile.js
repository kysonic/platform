import React from 'react';
import Profile from '@components/profile/Profile';
import {ConnectHeader} from '@utils/navigation';

const ProfileScreen = (props) => {
    return (
        <Profile />
    );
};

ConnectHeader(ProfileScreen, {title: 'Profile', back: true});

export default ProfileScreen;
