// @flow
import {observable, computed, flow, decorate, action} from 'mobx';
import {auth} from 'react-native-firebase';

function AuthStore() {
    const store = {
        user: null,
        error: null,
        isLoading: false,

        get isAuth() {
            return !!this.user;
        },

        register: flow(function *(email: string, password: string) {
            this.isLoading = true;
            try {
                const response = yield auth().createUserWithEmailAndPassword(email, password);
                this.user = response.user?._user;
            } catch (err) {
                console.log(err);
                this.error = err;
            }
            this.isLoading = false;
        }),

        login: flow(function *(email: string, password: string) {
            this.isLoading = true;
            try {
                const response = yield auth().signInWithEmailAndPassword(email, password);
                console.log(response);
                this.user = response.user?._user;
            } catch (err) {
                console.log(err);
                this.error = err;
            }
            this.isLoading = false;
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
        login: action
    });

    return store;
}

export default AuthStore();
