// @flow
import React from 'react';
import {StyleSheet, View, ImageBackground, TouchableOpacity} from 'react-native';
import {Icon, Text} from 'native-base';
import Avatar from './Avatar';
import cover from '@assets/img/covers/f-1-cover.jpeg';
import theme from '@themes/native-base/variables/platform';
import ProfileUserName from './ProfileUserName';

const ProfileCover = ({user, onBackPress = () => {} }) => {
    return (
        <ImageBackground source={cover} style={profileCoverStyles.container}>
            <View style={profileCoverStyles.header}>
                <TouchableOpacity onPress={onBackPress}>
                    <Icon type="Feather" name="arrow-left" style={profileCoverStyles.backIcon} />
                </TouchableOpacity>
                <Text style={profileCoverStyles.headerText}>Profile</Text>
            </View>
            <View style={profileCoverStyles.group}>
                <Avatar uri={user.avatar} size={80} style={profileCoverStyles.avatar}/>
                <ProfileUserName {...user} style={profileCoverStyles.userName} textStyle={profileCoverStyles.userNameText} />
            </View>
            <View></View>
        </ImageBackground>
    );
};

const profileCoverStyles = StyleSheet.create({
    container: {
        minHeight: 768 / 3,
        justifyContent: 'space-between',
    },
    group: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    userName: {
        alignItems: 'center',
    },
    userNameText: {
        color: theme.brandLight,
    },
    header: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backIcon: {
        color: theme.brandLight,
        marginLeft: 10,
    },
    headerText: {
        color: theme.brandLight,
        marginLeft: 10,
        fontSize: 18,
    },
});

export default ProfileCover;
