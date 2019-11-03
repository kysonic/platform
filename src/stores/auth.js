// @flow
import {observable, computed, flow, decorate, action} from 'mobx';
import {auth} from 'react-native-firebase';
import { GoogleSignin } from '@react-native-community/google-signin';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import config from '@config';

import type {UserType} from '@types/base';

export type AuthStoreType = {
    user: UserType | null,
    error: string,
    isLoading: boolean,
    phoneResponse: Object | null,
    setIsLoading: (isLoading: boolean) => void,
    isAuth: () => boolean,
    register: (email: string, password: string) => Promise<any>,
    login: (email: string, password: string) => Promise<any>,
    loginWithGoogle: () => Promise<any>,
    loginWithFacebook: () => Promise<any>,
    loginWithPhone: (phone: string) => Promise<any>,
    confirmPhoneCode: (code: string) => Promise<any>,
    logout: () => Promise<any>,
}

export function Auth() {
    const store: AuthStoreType = {
        user: null,
        error: '',
        isLoading: false,
        phoneResponse: null,

        setIsLoading(isLoading) {
            this.isLoading = isLoading;
        },

        get isAuth() {
            return !!this.user;
        },

        register: flow(function *(email: string, password: string) {
            this.isLoading = true;
            this.error = '';
            try {
                const response = yield auth().createUserWithEmailAndPassword(email, password);
                this.user = response.user?._user;
            } catch (err) {
                console.log(err);
                this.error = err.message;
            }
            this.isLoading = false;
            return false;
        }),

        login: flow(function *(email: string, password: string) {
            this.isLoading = true;
            this.error = '';
            try {
                const response = yield auth().signInWithEmailAndPassword(email, password);
                this.user = response.user?._user;
            } catch (err) {
                console.log(err);
                this.error = err.message;
            }
            this.isLoading = false;
            return false;
        }),

        logout: flow(function *() {
            this.isLoading = true;
            this.error = '';
            try {
                yield auth().signOut();
            } catch (err) {
                console.log(err);
                this.error = err.message;
            }
            this.isLoading = false;
            return false;
        }),

        loginWithGoogle: flow(function *() {
            this.isLoading = true;
            this.error = '';
            try {
                yield GoogleSignin.configure({
                    webClientId: config.google?.webClient?.id,
                    offlineAccess: true,
                });
                // Get sign in data
                const data = yield GoogleSignin.signIn();
                const credential = auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
                const firebaseUserCredential = yield auth().signInWithCredential(credential);
                // Save user in the store
                this.user = firebaseUserCredential.user;
            } catch (err) {
                console.log(err);
                this.error = err.message;
            }
            this.isLoading = false;
            return false;
        }),

        loginWithFacebook: flow(function *() {
            this.isLoading = true;
            this.error = '';
            try {
                const result = yield LoginManager.logInWithPermissions(['public_profile', 'email']);

                if (result.isCancelled) {
                    throw new Error('User cancelled request');
                }

                const data = yield AccessToken.getCurrentAccessToken();

                if (!data) {
                    throw new Error('Something went wrong obtaining the users access token');
                }

                const credential = auth.FacebookAuthProvider.credential(data.accessToken);

                const firebaseUserCredential = yield auth().signInWithCredential(credential);

                this.user = firebaseUserCredential.user;
            } catch (err) {
                console.log(err);
                this.error = err.message;
            }
            this.isLoading = false;
            return false;
        }),

        loginWithPhone: flow(function *(phone: string) {
            this.isLoading = true;
            this.error = '';
            try {
                this.phoneResponse = yield auth().signInWithPhoneNumber(phone);
                console.log(this.phoneResponse);
            } catch (err) {
                console.log(err);
                this.error = err.message;
            }
            this.isLoading = false;
            return false;
        }),

        confirmPhoneCode: flow(function *(code: string) {
            this.isLoading = true;
            this.error = '';
            try {
                this.user = yield this.phoneResponse.confirm(code);
            } catch (err) {
                console.log(err);
                this.error = err.message;
            }
            this.isLoading = false;
            return false;
        }),
    };

    decorate(store, {
        user: observable,
        error: observable,
        isLoading: observable,
        phoneResponse: observable.ref,
        isAuth: computed,
        setIsLoading: action,
        register: action,
        login: action,
        loginWithGoogle: action,
    });

    return store;
}

export default Auth();