// @flow
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useObserver} from 'mobx-react-lite';
import userStore from '@stores/user';
import {Container, Content, Button, Text, Footer} from 'native-base';
import EditableProfileData from '@components/profile/EditableProfileData';
import {capitalizeFirst} from '@utils/string';
import ProfileCover from '@components/ui/ProfileCover';
import theme from '@themes/native-base/variables/platform';

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
                    <ProfileCover user={user} onBackPress={() => navigation.goBack()} />
                    <Content>
                        <EditableProfileData editMode={editMode} user={user} onChange={onChange} />
                    </Content>
                    <Footer style={styles.footer}>
                        <Button style={styles.button} onPress={action}>
                            <Text style={styles.text}>{!editMode ? 'Edit' : 'Save'}</Text>
                        </Button>
                    </Footer>
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
    footer: {
        borderTopWidth: 0,
        backgroundColor: theme.containerBgColor,
        padding: 0,
        margin: 0,
        height: 10,
    },
    button: {
        width: '100%',
        backgroundColor: theme.footerCTAButtonColor,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: theme.tabBarTextColor,
    },
});

export default ProfileScreen;
