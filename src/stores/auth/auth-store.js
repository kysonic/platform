// @flow
import {observable, computed, flow, decorate} from 'mobx';
import {auth} from 'react-native-firebase';

function AuthStore() {
    const store = {
        user: null,
        isLoading: false,
        get isAuth() {
            return !!this.user;
        },
        register: flow(function *(email, password) {
            this.isLoading = true;
            try {
                const response = yield auth().createUserWithEmailAndPassword(email, password);
                this.user = response.user?._user;
            } catch (err) {
                console.error(err);
            }
            this.isLoading = false;
        }),
        login: flow(function *(email, password) {
            this.isLoading = true;
            try {
                const response = yield auth().signInWithEmailAndPassword(email, password);
                this.user = response.user?._user;
            } catch (err) {
                console.error(err);
            }
            this.isLoading = false;
        })
    };

    decorate(store, {
        user: observable,
        isLoading: observable,
        isAuth: computed,
    });

    return store;
}

export default AuthStore();
