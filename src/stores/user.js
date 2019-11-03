// @flow
import {observable, action, flow, decorate} from 'mobx';
import {database} from 'react-native-firebase';

import type {UserType} from '@types/base';

export type UserStoreType = {
    user: UserType,
    isLoading: boolean,
    error: string,
    createUser: (user: UserType) => Promise<any>
}

export function User() {
    const store: UserStoreType = {
        user: {
            id: '',
            email: '',
            name: '',
            startedCourses: [],
            completedCourses: [],
            exoIndex: 0,
            birthData: '',
            avatar: '',
        },

        isLoading: false,

        error: '',

        createUser: flow(function *(user: UserType) {
            this.isLoading = true;
            try {
                yield database().ref(`users/${user.id}`).set(user);
            } catch (err) {
                console.log(err);
                this.error = err.message;
            }
        }),
    };

    decorate(store, {
        id: observable,
        email: observable,
        name: observable,
        startedCourses: observable.shallow,
        completedCourses: observable.shallow,
        exoIndex: observable,
        birthData: observable,
        avatar: observable,

        createUser: action,
    });

    return store;
}

export default User();
