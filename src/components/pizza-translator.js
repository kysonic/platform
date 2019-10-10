import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const PizzaTranslator = (props) => {
    const [text, setText] = useState('');
    return (
        <View>
            <TextInput
                value={text}
                placeholder="Type text to translate"
                onChangeText={(text) => setText(text)}
            />
            <Text>
                {text.split(' ').map(word => word && '🍕').join(' ')}
            </Text>
        </View>
    );
};

export default PizzaTranslator;
