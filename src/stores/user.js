// @flow
import {observable, action, flow, decorate, toJS} from 'mobx';
import firestore from '@react-native-firebase/firestore';
import {mergeWithArrayConcat} from '@utils/object';

import type {UserType} from '@types/base';
import type {DocumentReference} from '@react-native-firebase/firestore/';

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

export function User() {
    const store: UserType = DEFAULT_USER;

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

    handleError: (err: Error) => void,
    setUserFromDocRef: (err: DocumentReference) => Promise<any>,
    createUser: (user: UserType) => Promise<any>,
    updateUser: (user: UserType) => Promise<any>,
    upsertUser: (user: UserType) => Promise<any>,
    getUser: (user: UserType) => Promise<any>
}

export function UserStore() {
    const store: UserStoreType = {
        user: User(),

        isLoading: false,

        error: '',

        handleError(err: Error) {
            console.log(err);
            this.error = err.message;
        },

        setUserFromDocRef: flow(function *(userDocRef: DocumentReference) {
            const userDoc = yield userDocRef.get();
            this.user = userDoc.data();
            this.user.id = userDoc.id;
            console.log(this.user);
        }),

        createUser: flow(function *(user: UserType) {
            try {
                const userDocRef = yield firestore().collection(USER_COLLECTION_NAME).add(Object.assign(DEFAULT_USER, user));
                this.setUserFromDocRef(userDocRef);
            } catch (err) {
                this.handleError(err);
            }
        }),

        updateUser: flow(function *(id, user) {
            const userDocRef = yield firestore().collection(USER_COLLECTION_NAME).doc(id);
            const userDoc = yield userDocRef.get();
            if (userDoc && userDoc.id) {
                const userData = userDoc.data();
                const updatedUserData = mergeWithArrayConcat(userData, user);
                yield userDocRef.set(updatedUserData);
                this.setUserFromDocRef(userDocRef);
            }
        }),

        upsertUser: flow(function *(user: UserType) {
            try {
                if (user.email) {
                    const querySnapshot = yield firestore().collection(USER_COLLECTION_NAME)
                        .where('email', '==', user.email)
                        .get();

                    if (querySnapshot.size) {
                        let userDocRef = querySnapshot.docs?.[0];
                        return this.updateUser(userDocRef.id, user);
                    }
                }

                if (user.phone) {
                    const querySnapshot = yield firestore().collection(USER_COLLECTION_NAME)
                        .where('phone', '==', user.phone)
                        .get();

                    if (querySnapshot.size) {
                        let userDocRef = querySnapshot.docs?.[0];
                        return this.updateUser(userDocRef.id, user);
                    }
                }

                yield this.createUser(user);

            } catch (err) {
                this.handleError(err);
            }
        }),

        getUser: flow(function * (firebaseUid: string) {
            console.log('GET USER', firebaseUid);
            try {
                if (!firebaseUid) {
                    throw new Error('User id not found!');
                }
                const querySnapshot = yield firestore().collection(USER_COLLECTION_NAME)
                    .where('authId', 'array-contains', firebaseUid)
                    .get();

                const userDoc = querySnapshot.docs?.[0];
                if (!userDoc) {
                    throw new Error('User not found!');
                }
                this.user = userDoc.data();
                this.user.id = userDoc.id;

                console.log(this.user);
            } catch (err) {
                console.log(err);
                this.error = err.message;
            }

            return false;
        }),

        clearUser() {
            this.user = null;
        },
    };

    decorate(store, {
        user: observable.ref,
        isLoading: observable,
        error: observable,

        upsertUser: action,
        createUser: action,
        updateUser: action,
        getUser: action,
        handleError: action,
        setUserFromDocRef: action,
    });

    return store;
}

export default UserStore();
