// @flow
import {observable, action, flow, decorate} from 'mobx';
import firestore from '@react-native-firebase/firestore';
import {mergeWithArrayConcat} from '@utils/object';
import {BaseStoreFactory, BaseStoreDecorators} from './base';
import {assign} from '@utils/object';

import type {UserType} from '@types/base';
import type {DocumentReference, DocumentSnapshot, Query} from '@react-native-firebase/firestore/';

export const USER_COLLECTION_NAME = 'users';
export const DEFAULT_USER = {
    id: '',
    authId: [],
    email: '',
    name: '',
    startedCourses: [],
    completedCourses: [],
    ecoIndex: 0,
    birthDate: '',
    avatar: '',
    phone: '',
};

export function UserFactory(): UserType {
    return Object.assign({}, DEFAULT_USER);
}

export function UserDecorators() {
    return {
        id: observable,
        authId: observable,
        email: observable,
        name: observable,
        startedCourses: observable.shallow,
        completedCourses: observable.shallow,
        ecoIndex: observable,
        birthDate: observable,
        avatar: observable,
    };
}

export function User() {
    return decorate(UserFactory(), UserDecorators());
}

export type UserStoreType = {
    user: UserType | null,

    clearUser: () => void,
    setUserFromDocRef: (err: DocumentReference) => Promise<any>,
    createUser: (user: UserType) => Promise<any>,
    updateUser: (id: string, user: UserType) => Promise<any>,
    upsertUser: (user: UserType) => Promise<any>,
    getUser: (user: UserType) => Promise<any>
}

export function UserStoreFactory(): UserStoreType {
    return {
        user: User(),

        setUserFromDocRef: flow(function *(userDocRef: DocumentReference) {
            this.startRequest();

            try {
                const userDoc: DocumentSnapshot = yield userDocRef.get();
                this.user = userDoc.data();
                this.user.id = userDoc.id;
            } catch (err) {
                return this.handleError(err);
            }

            this.endRequest();
        }),

        createUser: async function (user: UserType) {
            this.startRequest();

            try {
                const userDocRef: DocumentReference = await firestore().collection(USER_COLLECTION_NAME).add(Object.assign({}, DEFAULT_USER, user));
                this.setUserFromDocRef(userDocRef);
            } catch (err) {
                return this.handleError(err);
            }

            this.endRequest();
        },

        updateUser: async function (id: string, user: UserType) {
            this.startRequest();

            try {
                const userDocRef: DocumentReference = await firestore().collection(USER_COLLECTION_NAME).doc(id);
                const userDoc: DocumentSnapshot = await userDocRef.get();

                if (userDoc && userDoc.id) {
                    const userData = userDoc.data();
                    const updatedUserData = mergeWithArrayConcat(userData, user);
                    await userDocRef.set(updatedUserData);
                    this.setUserFromDocRef(userDocRef);
                }

            } catch (err) {
                return this.handleError(err);
            }

            this.endRequest();
        },

        upsertUser: async function (user: UserType) {
            this.startRequest();

            try {

                if (user.email) {
                    const querySnapshot: Query = await firestore().collection(USER_COLLECTION_NAME)
                        .where('email', '==', user.email)
                        .get();

                    if (querySnapshot.size) {
                        let userDoc: DocumentSnapshot = querySnapshot.docs?.[0];
                        return this.updateUser(userDoc.id, user);
                    }
                }

                if (user.phone) {
                    const querySnapshot: Query = await firestore().collection(USER_COLLECTION_NAME)
                        .where('phone', '==', user.phone)
                        .get();

                    if (querySnapshot.size) {
                        let userDoc: DocumentSnapshot = querySnapshot.docs?.[0];
                        return this.updateUser(userDoc.id, user);
                    }
                }

                await this.createUser(user);

            } catch (err) {
                return this.handleError(err);
            }

            this.endRequest();
        },

        getUser: flow(function * (firebaseUid: string) {
            this.startRequest();

            try {

                if (!firebaseUid) {
                    throw new Error('User id not found!');
                }

                const querySnapshot: Query = yield firestore().collection(USER_COLLECTION_NAME)
                    .where('authId', 'array-contains', firebaseUid)
                    .get();

                const userDoc: DocumentSnapshot = querySnapshot.docs?.[0];

                if (!userDoc) {
                    throw new Error('User not found!');
                }

                this.user = userDoc.data();
                this.user.id = userDoc.id;

            } catch (err) {
                return this.handleError(err);
            }
            this.endRequest();
        }),

        clearUser() {
            this.user = null;
        },
    };
}

export function UserStoreDecorators() {
    return {
        user: observable.ref,

        upsertUser: action,
        createUser: action,
        updateUser: action,
        getUser: action,
        handleError: action,
        setUserFromDocRef: action,
    };
}

export function UserStore() {
    return decorate(
        assign(UserStoreFactory(), BaseStoreFactory()),
        assign(UserStoreDecorators(), BaseStoreDecorators())
    );
}

export default UserStore();
