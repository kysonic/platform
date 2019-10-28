// @flow
import {observable, computed, flow, decorate, action} from 'mobx';
import {auth} from 'react-native-firebase';
import type {User} from '@types/base';

type AuthStoreType = {
    user: User | null,
    error: string,
    isLoading: boolean,
    isAuth: () => boolean,
    register: (email: string, password: string) => Promise<any>,
    login: (email: string, password: string) => Promise<any>,
    logout: () => Promise<any>,
    setIsLoading: (isLoading: boolean) => void
}

function AuthStore() {
    const store: AuthStoreType = {
        user: null,
        error: '',
        isLoading: false,

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

        setIsLoading(isLoading) {
            this.isLoading = isLoading;
        },
    };

    decorate(store, {
        user: observable,
        error: observable,
        isLoading: observable,
        isAuth: computed,
        setIsLoading: action,
        register: action,
        login: action,
    });

    return store;
}

export default AuthStore();
