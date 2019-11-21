// @flow
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useObserver} from 'mobx-react-lite';
import userStore from '@stores/user';
import {Container, Content, Button, Text} from 'native-base';
import EditableProfileData from '@components/profile/EditableProfileData';
import {capitalizeFirst} from '@utils/string';
import ProfileCover from '@components/ui/ProfileCover';

const ProfileScreen = ({navigation}) => {
    const [editMode, setEditMode] = useState(false);
    (editMode: boolean);

    const action = () => {
        if (!editMode) {
            return setEditMode(true);
        }

        userStore.saveUser();
        setEditMode(false);
    };

    const onChange = (name: string, value: mixed): void => {
        const setUserMethodName = `setUser${capitalizeFirst(name)}`;

        if (userStore[setUserMethodName] && typeof userStore[setUserMethodName] === 'function') {
            userStore[setUserMethodName](value);
        }
    };

    return useObserver(
        () => {
            const user = userStore.user;

            return (
                <Container style={styles.container}>
                    <Content contentContainerStyle={styles.content}>
                        <ProfileCover user={user} onBackPress={() => navigation.goBack()} />
                        <EditableProfileData editMode={editMode} user={user} onChange={onChange} />
                        <Button block onPress={action}>
                            <Text>{!editMode ? 'Edit' : 'Save'}</Text>
                        </Button>
                    </Content>
                </Container>
            );
        }
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
    },
});

export default ProfileScreen;
