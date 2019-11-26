// @flow
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, Icon} from 'native-base';
import {SwipeListView} from 'react-native-swipe-list-view';
import theme from '@themes/native-base/variables/platform';

const OPEN_VALUE = 75;

type SwipeableListHiddenButtonType = {
    text?: string,
    icon?: string,
    onPress?: Function,
    data?: any,
}

const SwipeableListHiddenButton = ({text, icon, onPress, data}: SwipeableListHiddenButtonType) => {
    return (
        <Button style={slhbStyles.button} onPress={() => onPress && onPress(data)}>
            {icon && <Icon style={[slhbStyles.icon, text ? slhbStyles.iconWithText : {}]} type="Feather" name={icon}/>}
            {text && <Text style={slhbStyles.text}>{text}</Text>}
        </Button>
    );
};

const slhbStyles = StyleSheet.create({
    button: {
        width: OPEN_VALUE,
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
    },
    icon: {
        fontSize: 20,
    },
    iconWithText: {
        fontSize: 12,
    },
    text: {
        fontSize: 10,
    },
});

type SwipeableListPropsType = {
    data?: Array<any>,
    left?: SwipeableListHiddenButtonType,
    right?: SwipeableListHiddenButtonType,
    itemRenderer?: (data: any, rowMap: any) => any | null,
};

const SwipeableList = ({data, right, left, itemRenderer = null}: SwipeableListPropsType) => {
    const openValues = {};
    if (right) {
        openValues.rightOpenValue = -OPEN_VALUE;
    }

    if (left) {
        openValues.leftOpenValue = OPEN_VALUE;
    }

    return (
        <SwipeListView
            data={data}
            renderItem={(data, rowMap) => {
                return itemRenderer ? itemRenderer(data, rowMap) : (
                    <View style={swipeableListStyles.item}>
                        <Icon style={swipeableListStyles.icon} type="Feather" name="info" />
                        <View>
                            <Text style={swipeableListStyles.line}>{data.item.line}</Text>
                            <Text style={swipeableListStyles.subline}>{data.item.subline}</Text>
                        </View>
                    </View>
                );
            }}
            renderHiddenItem={(data, rowMap) => (
                <View style={swipeableListStyles.hidden}>
                    <View>
                        {left && <SwipeableListHiddenButton {...left} data={data} />}
                    </View>
                    <View>
                        {right && <SwipeableListHiddenButton {...right} data={data} />}
                    </View>
                </View>
            )}
            {...openValues}
        />
    );
};

const swipeableListStyles = StyleSheet.create({
    item: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        backgroundColor: theme.brandLight,
        borderBottomWidth: 1,
        borderBottomColor: theme.containerBgColor,
        ...theme.boxShadow,
    },
    hidden: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        color: theme.weakText,
        marginRight: 20,
    },
    line: {
        fontSize: 16,
        color: theme.strongText,
    },
    subline: {
        fontSize: 14,
        color: theme.weakText,
    },
});

export default SwipeableList;
