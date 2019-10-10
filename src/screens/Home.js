import React, {useState, useEffect} from 'react';
import {View, Animated, Text} from 'react-native';

const HomeScreen = ({navigation: {navigate}}) => {
    const [fadeAnimation] = useState(new Animated.Value(0));
    const [position] = useState(new Animated.Value({x:100, y:100}));

    React.useEffect(() => {
        Animated.parallel([
            Animated.timing(
                fadeAnimation,
                {
                    toValue: 1,
                    duration: 10000
                }
            ),
            Animated.spring(
                position,
                {
                    toValue: {x: 0, y: 0},
                    duration: 5000
                }
            )
        ]).start();
    }, []);

    return (
        <View>
            <Animated.View style={{opacity: fadeAnimation, position: 'absolute', top: position.y, left: position.x}}>
                <Text>Home Screen</Text>
            </Animated.View>
        </View>
    );
};

export default HomeScreen;
