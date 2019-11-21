// @flow
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import ProfilePlate from '@components/ui/ProfilePlate';
import {useObserver} from 'mobx-react-lite';
import userStore from '@stores/user';
import {Container, Content, Button, Text} from 'native-base';
import EditableProfileData from './EditableProfileData';
import {capitalizeFirst} from '@utils/string';

const Profile = () => {
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
                        <ProfilePlate user={user} />
                        <EditableProfileData editMode={editMode} user={user} onChange={onChange} />
                        <Button full onPress={action}>
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
        width: '100%',
    },
});

export default Profile;
