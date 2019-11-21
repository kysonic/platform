// @flow
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Avatar from './Avatar';
import ProfileUserName from './ProfileUserName';
import theme from '@themes/native-base/variables/platform';

const ProfilePlate = ({user, onPress = () => {} }) => {
    return (
        <TouchableOpacity style={profilePlateStyles.container} onPress={onPress}>
            <Avatar uri={user.avatar} style={profilePlateStyles.avatar}/>
            <ProfileUserName {...user} style={profilePlateStyles.userName} />
        </TouchableOpacity>
    );
};

const profilePlateStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: theme.brandLight,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    userName: {
        marginLeft: 10,
    }
});

export default ProfilePlate;
