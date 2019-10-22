import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useObserver} from 'mobx-react-lite';
import {TodoList as TodoListStore} from '@stores/demo/todos';
import {Form, Item, Label, Input, Text, Button} from 'native-base';

const todoStore = TodoListStore();

const TodoList = (props) => {
    const [text, setText] = useState('');
    return useObserver(() => (
        <View>
            <Form>
                <Item floatingLabel>
                    <Label>Todo Text</Label>
                    <Input value={text} onChangeText={text => setText(text)} />
                </Item>
                <Button primary style={styles.button} onPress={() => {todoStore.create(text); setText('')}}>
                    <Text>Yoga Node</Text>
                </Button>
            </Form>
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
        marginTop: 10,
        textAlign: 'center'
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
