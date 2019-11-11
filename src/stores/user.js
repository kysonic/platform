// @flow
import {observable, action, flow, decorate} from 'mobx';
import firestore from '@react-native-firebase/firestore';

import type {UserType} from '@types/base';
import type {DocumentReference} from '@react-native-firebase/firestore/';

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

    handleError: (err: Error) => void,
    setUserFromDocRef: (docRef: DocumentReference) => Promise<any>,
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
        }),

        createUser: flow(function *(user: UserType) {
            try {
                const docRef = yield firestore().collection(USER_COLLECTION_NAME).add(user);
                console.log(docRef,44);
                this.setUserFromDocRef(docRef);
            } catch (err) {
                this.handleError(err);
            }
        }),

        updateUser: flow(function *(id, user) {
            let userDocRef = yield firestore().collection(USER_COLLECTION_NAME).doc(id);
            console.log(userDocRef, 61);
            if (userDocRef && userDocRef.id) {
                const userData = userDocRef.data();
                console.log(userData, 71);
                const updatedUserData = Object.assign(userData, user);
                console.log(updatedUserData, 81);
                userDocRef = yield userDocRef.set(updatedUserData);
                console.log(userDocRef, 91);
                this.setUserFromDocRef(userDocRef);
            }
        }),

        upsertUser: flow(function *(user: UserType) {
            try {
                console.log(user.email,1);
                if (user.email) {
                    console.log(2);
                    const querySnapshot = yield firestore().collection(USER_COLLECTION_NAME)
                        .where('email', '==', user.email)
                        .get();
                    console.log(querySnapshot.size, 3);
                    if (querySnapshot.size) {
                        console.log(4);
                        let userDocRef = querySnapshot.docs?.[0];
                        console.log(userDocRef,5);
                        return this.updateUser(userDocRef.id, user);
                    }
                }
                console.log('BACKWAY');
                yield this.createUser(user);

            } catch (err) {
                this.handleError(err);
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
                const userDocRef = querySnapshot.docs?.[0];
                if (!userDocRef) {
                    throw new Error('User not found!');
                }
                this.user = userDocRef.data();
                this.user.id = userDocRef.id;

                return this.user;
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
