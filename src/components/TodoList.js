import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
import {useObserver} from 'mobx-react-lite';
import {TodoList as TodoListStore} from '@stores/todos';

const todoStore = TodoListStore();

const TodoList = (props) => {
    const [text, setText] = useState('');
    return useObserver(() => (
        <View>
            <View style={styles.controls}>
                <TextInput value={text} onChangeText={text => setText(text)} label='Todo' />
                <Button title="Add" style={styles.button} onPress={() => {todoStore.create(text); setText('')}}>
                    <Text>Yoga Node</Text>
                </Button>
            </View>
            <View style={styles.list}>
                {Array.from(todoStore.todos).map((todo) => (
                    <View key={todo.text} style={styles.todo}>
                        <Text onPress={() => todo.toggle()}>{todo.text}</Text>
                        <Text>{todo.done ? "(Done)" : "(Not Done)"}</Text>
                    </View>
                ))}
            </View>
        </View>
    ));
};

const styles = StyleSheet.create({
    button: {
        marginTop: 10
    },
    controls: {

    },
    list: {
        marginTop: 10
    },
    todo: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5
    }
});

export default TodoList;
