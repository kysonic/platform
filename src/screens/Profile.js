// @flow
import React, {useState} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {useObserver} from 'mobx-react-lite';
import userStore from '@stores/user';
import {Container, Content, Button, Text, Footer} from 'native-base';
import EditableProfileData from '@components/profile/EditableProfileData';
import {capitalizeFirst} from '@utils/string';
import ProfileCover from '@components/ui/ProfileCover';
import theme from '@themes/native-base/variables/platform';

import type {StyleSheetType} from '@types/base';
import type {_NavigationInjectedProps} from 'react-navigation';


type ProfileScreenPropsType = {
    navigation: _NavigationInjectedProps
}

const ProfileScreen = ({navigation} : ProfileScreenPropsType) => {
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
                    <Content style={styles.content}>
                        <EditableProfileData editMode={editMode} user={user} onChange={onChange} />
                    </Content>
                    <Footer style={styles.footer}>
                        <Button style={[styles.button, editMode ? styles.buttonEdit : {}]} onPress={action}>
                            <Text style={[styles.text, editMode ? styles.textEdit : {}]}>{!editMode ? 'Edit' : 'Save'}</Text>
                        </Button>
                    </Footer>
                </Container>
            );
        }
    );
};

const styles: StyleSheetType = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.containerBgColor,
    },
    content: {
        flex: 1,
    },
    footer: {
        borderTopWidth: 0,
        backgroundColor: theme.containerBgColor,
        padding: 0,
        margin: 0,
        maxHeight: 45,
    },
    button: {
        width: '100%',
        backgroundColor: theme.footerCTAButtonColor,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonEdit: {
        backgroundColor: theme.footerCTAActiveButtonColor,
    },
    text: {
        color: theme.tabBarTextColor,
    },
    textEdit: {
        color: theme.inverseTextColor,
    },
});

export default ProfileScreen;
