// @flow
import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Icon} from 'native-base';
import Avatar from './Avatar';
import ProfileUserName from './ProfileUserName';
import theme from '@themes/native-base/variables/platform';

const ProfilePlate = ({user, onPress = () => {} }) => {
    return (
        <TouchableOpacity style={profilePlateStyles.container} onPress={onPress}>
            <View style={profilePlateStyles.user}>
                <Avatar uri={user.avatar} style={profilePlateStyles.avatar}/>
                <ProfileUserName {...user} style={profilePlateStyles.userName} />
            </View>
            <Icon style={profilePlateStyles.editIcon} type="Feather" name="edit" />
        </TouchableOpacity>
    );
};

const profilePlateStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: theme.brandLight,

        ...theme.boxShadow,
    },
    user: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    userName: {
        marginLeft: 10,
    },
    editIcon: {
        fontSize: 20,
        color: theme.listBorderColor,
        marginRight: 15,
    },
});

export default ProfilePlate;
