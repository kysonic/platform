// @flow
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Avatar from '@components/ui/Avatar';
import {useObserver} from 'mobx-react-lite';
import userStore from '@stores/user';
import {Container, Content, Footer, FooterTab, Button, Text} from 'native-base';
import theme from '@themes/native-base/variables/platform';
import EditableProfileData from './EditableProfileData';

type PropsType = {
    name: string,
    email: string,
    phone: string,
}

const ProfileUserName = ({name, email, phone}: PropsType) => {
    const dataArray: Array<string> = [name, email, phone].filter(v => v);
    const onlyOneItem = dataArray.length === 1;
    return (
        <View style={[profileNameStyles.container, onlyOneItem ? profileNameStyles.containerCentered : {}]}>
            <Text style={[profileNameStyles.primary, !onlyOneItem ? profileNameStyles.primaryMargin : {}]}>{dataArray[0]}</Text>
            {dataArray[1] ? <Text style={profileNameStyles.secondary}>{dataArray[1]}</Text> : null}
        </View>
    );
};

const profileNameStyles = StyleSheet.create({
    container: {
        padding: 10,
    },
    containerCentered: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    primary: {
        fontSize: 18,
        color: theme.grayText,
    },
    primaryMargin: {
        marginTop: 5,
    },
    secondary: {
        fontSize: 14,
        color: theme.weakText,
    },
});

const Profile = () => {
    const [editMode, setEditMode] = useState(false);
    (editMode: boolean);

    const action = () => {
        if (!editMode) {
            return setEditMode(true);
        }
    };

    const onChange = () => {
        console.log('Change');
    }

    return useObserver(
        () => {
            const user = userStore.user;

            return (
                <Container style={styles.container}>
                    <Content contentContainerStyle={styles.content}>
                        <View style={styles.header}>
                            <Avatar uri={user.avatar} style={styles.avatar}/>
                            <ProfileUserName {...user} />
                        </View>
                        <EditableProfileData editMode={editMode} user={user} onChange={onChange} />
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button full onPress={action}>
                                <Text>{!editMode ? 'Edit' : 'Save'}</Text>
                            </Button>
                        </FooterTab>
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
        width: '100%',
    },
    header: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    avatar: {

    },
});

export default Profile;
