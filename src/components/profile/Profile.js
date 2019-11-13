import React from 'react';
import {View, StyleSheet} from 'react-native';
import Avatar from '@components/ui/Avatar';
import {useObserver} from 'mobx-react-lite';
import userStore from '@stores/user';

const Profile = (props) => {
    return useObserver(
        () => {
            return (
                <View style={styles.container}>
                    <Avatar uri={userStore.user.avatar} />
                </View>
            );
        }
    );
};

const styles = StyleSheet.create({
   container: {

   },
});

export default Profile;
