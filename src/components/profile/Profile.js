// @flow
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Avatar from '@components/ui/Avatar';
import {useObserver} from 'mobx-react-lite';
import userStore from '@stores/user';
import ProfileInfo from './ProfileInfo';
import ProfileForm from './ProfileForm';
import {Container, Content, Footer, FooterTab, Button, Text} from 'native-base';
import theme from '@themes/native-base/variables/platform';

const Profile = () => {
    const [editMode, setEditMode] = useState(false);
    (editMode: boolean);

    return useObserver(
        () => {
            const user = userStore.user;
            const emailAndPhone = (user.phone && user.email);
            return (
                <Container style={styles.container}>
                    <Content contentContainerStyles={styles.content}>
                        <View style={[styles.header, emailAndPhone ? {} : styles.headerCentered]}>
                            <Avatar uri={user.avatar} style={styles.avatar}/>
                            <View style={styles.headerInfo}>
                                {user.email ? <Text style={[styles.email, emailAndPhone ? styles.emailTop : {}]}>{user.email}</Text> : null}
                                {user.phone ? <Text style={user.email ? styles.phoneSmall : styles.phoneBig}>{user.phone}</Text> : null}
                            </View>
                        </View>
                        <View style={styles.ecoIndex}>
                            <Text style={styles.ecoIndexText}>Your eco index is "{user.ecoIndex}"</Text>
                        </View>
                        {!editMode ? <ProfileInfo user={userStore.user} /> : <ProfileForm user={userStore.user} />}
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button full>
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
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 10,
    },
    header: {
        margin: 10,
        flexDirection: 'row',
        width: 'auto',
        justifyContent: 'center',
    },
    headerCentered: {
        alignItems: 'center',
    },
    headerInfo: {
        marginLeft: 10,
    },
    email: {
        fontSize: 20,
        color: theme.touchableTextColor,
    },
    emailTop: {
        marginTop: 15,
    },
    phoneSmall: {
        fontSize: 14,
        marginTop: 2,
        color: theme.weakText,
    },
    phoneBig: {
        fontSize: 20,
        color: theme.touchableTextColor,
    },
    ecoIndex: {
        padding: 20,
    },
    ecoIndexText: {
        fontSize: 25,
        color: theme.brandPrimary,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    avatar: {

    },
});

export default Profile;
