// @flow
import {observable, action, flow, decorate} from 'mobx';
import firestore from '@react-native-firebase/firestore';

import type {UserType} from '@types/base';

export const USER_COLLECTION_NAME = 'users';

export function User() {
    const store: UserType = {
        id: '',
        authId: '',
        email: '',
        name: '',
        startedCourses: [],
        completedCourses: [],
        ecoIndex: 0,
        birthDate: '',
        avatar: '',
    };

    decorate(store, {
        id: observable,
        authId: observable,
        email: observable,
        name: observable,
        startedCourses: observable.shallow,
        completedCourses: observable.shallow,
        ecoIndex: observable,
        birthDate: observable,
        avatar: observable,
    });

    return store;
}

export type UserStoreType = {
    user: UserType | null,
    isLoading: boolean,
    error: string,

    createUser: (user: UserType) => Promise<any>,
    getUser: (user: UserType) => Promise<any>
}

export function UserStore() {
    const store: UserStoreType = {
        user: User(),

        isLoading: false,

        error: '',

        createUser: flow(function *(user: UserType) {
            try {
                const docRef = yield firestore().collection(USER_COLLECTION_NAME).add(user);
                this.user = user;
                this.user.id = docRef.id;
            } catch (err) {
                console.log(err);
                this.error = err.message;
            }
        }),

        getUser: flow(function * (firebaseUid: string) {
            try {
                if (!firebaseUid) {
                    throw new Error('User id not found!');
                }
                const querySnapshot = yield firestore().collection(USER_COLLECTION_NAME)
                    .where('authId', '==', firebaseUid)
                    .get();
                const firstDoc = querySnapshot.docs?.[0];
                if (!firstDoc) {
                    throw new Error('User not found!');
                }
                this.user = firstDoc.data();
                this.user.id = firstDoc.id;
            } catch (err) {
                console.log(err);
                this.error = err.message;
            }
        }),

        clearUser() {
            this.user = null;
        },
    };

    decorate(store, {
        user: observable.ref,
        isLoading: observable,
        error: observable,

        createUser: action,
        getUser: action,
    });

    return store;
}

export default UserStore();
