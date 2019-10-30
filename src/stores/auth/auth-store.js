// @flow
import {observable, computed, flow, decorate, action} from 'mobx';
import {auth} from 'react-native-firebase';
import type {User} from '@types/base';
import { GoogleSignin } from '@react-native-community/google-signin';

type AuthStoreType = {
    user: User | null,
    error: string,
    isLoading: boolean,
    isAuth: () => boolean,
    register: (email: string, password: string) => Promise<any>,
    login: (email: string, password: string) => Promise<any>,
    loginWithGoogle: () => Promise<any>,
    logout: () => Promise<any>,
    setIsLoading: (isLoading: boolean) => void
}

function AuthStore() {
    const store: AuthStoreType = {
        user: null,
        error: '',
        isLoading: false,

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
                const response = yield auth().signOut();
                console.log(response);
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
                // TODO: Move keys in configs
                yield GoogleSignin.configure({
                    webClientId: '972344367086-b2a4pm882msqvsia5a52fcieu5qibktd.apps.googleusercontent.com', // WebClient from Firebase or Goggle Console
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
    };

    decorate(store, {
        user: observable,
        error: observable,
        isLoading: observable,
        isAuth: computed,
        setIsLoading: action,
        register: action,
        login: action,
        loginWithGoogle: action,
    });

    return store;
}

export default AuthStore();
