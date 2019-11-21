// @flow
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';
import theme from '@themes/native-base/variables/platform';

import type {StyleSheetType} from '@types/base';

type ProfileUserNamePropsType = {
    name: string,
    email: string,
    phone: string,
    style?: StyleSheetType
}

const ProfileUserName = ({name, email, phone, style = {}, textStyle}: ProfileUserNamePropsType) => {
    const dataArray: Array<string> = [name, email, phone].filter(v => v);
    const onlyOneItem = dataArray.length === 1;
    return (
        <View style={[profileNameStyles.container, onlyOneItem ? profileNameStyles.containerCentered : {}, style]}>
            <Text style={[profileNameStyles.primary, !onlyOneItem ? profileNameStyles.primaryMargin : {}, textStyle]}>{dataArray[0]}</Text>
            {dataArray[1] ? <Text style={[profileNameStyles.secondary, textStyle]}>{dataArray[1]}</Text> : null}
        </View>
    );
};

const profileNameStyles = StyleSheet.create({
    container: {

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

export default ProfileUserName;
