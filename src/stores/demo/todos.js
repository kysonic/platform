import {observable, action, decorate} from 'mobx';

export function TodoItem({text = ''}) {
    const id = `id-${Math.random().toString()}`;

    const store = {
        id,
        text: text,
        done: false,

        toggle() {
            this.done = !this.done;
        }
    };

    decorate(store, {
        text: observable,
        done: observable,
        toggle: action
    });

    return store;
}

export function TodoList() {
    const store = {
        todos: [],

        create(text) {
            this.todos.push(TodoItem({text}));
        },

        toggle(id) {
            const todo = this.todos.find(item => item.id === id);
            todo.done = !todo.done;
        },

        remove(id) {
            const todoIndex = this.todos.findIndex(item => item.id === id);
            this.todos.splice(todoIndex, 1);
        }
    };

    decorate(store, {
        todos: observable.shallow,
        create: action,
        toggle: action,
        remove: action
    });

    return store;
}
