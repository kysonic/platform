// @flow
import {observable, computed, flow, decorate, action} from 'mobx';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import config from '@config';
import userStore from './user';
import {BaseStoreFactory, BaseStoreDecorators} from './base';
import {userMapper} from '@services/firebase-auth-mapper';
import {verifyPhone} from '@services/firebase-auth-phone';
import {assign} from '@utils/object';

export type AuthStoreType = {
    verificationId: string | null,
    isAuth: boolean,

    register: (email: string, password: string) => Promise<any>,
    login: (email: string, password: string) => Promise<any>,
    loginWithGoogle: () => Promise<any>,
    loginWithFacebook: () => Promise<any>,
    loginWithPhone: (phone: string) => Promise<any>,
    confirmPhoneCode: (code: string) => Promise<any>,
    logout: () => Promise<any>,
};

export function AuthStoreFactory(): AuthStoreType {
    return {
        verificationId: null,

        get isAuth() {
            return !!userStore.user;
        },

        register: flow(function *(email: string, password: string) {
            this.startRequest();
            try {
                const response = yield auth().createUserWithEmailAndPassword(email, password);
                userStore.upsertUser(userMapper(response.user?._user));
            } catch (err) {
                return this.handleError(err);
            }
            this.endRequest();
        }),

        login: flow(function *(email: string, password: string) {
            this.startRequest();
            try {
                yield auth().signInWithEmailAndPassword(email, password);
            } catch (err) {
                return this.handleError(err);
            }
            this.endRequest();
        }),

        logout: flow(function *() {
            this.startRequest();
            try {
                yield auth().signOut();
            } catch (err) {
                return this.handleError(err);
            }
            this.endRequest();
        }),

        loginWithGoogle: flow(function *() {
            this.startRequest();
            try {
                yield GoogleSignin.configure({
                    webClientId: config.google?.webClient?.id,
                    offlineAccess: true,
                });
                // Get sign in data
                const data = yield GoogleSignin.signIn();
                const credential = auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
                const firebaseUserCredential = yield auth().signInWithCredential(credential);
                userStore.upsertUser(userMapper(firebaseUserCredential.user?._user));
            } catch (err) {
                return this.handleError();
            }
            this.endRequest();
        }),

        loginWithFacebook: flow(function *() {
            this.startRequest();
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
                userStore.upsertUser(userMapper(firebaseUserCredential.user?._user));
            } catch (err) {
                return this.handleError(err);
            }
            this.endRequest();
        }),

        loginWithPhone: flow(function *(phone: string) {
            this.startRequest();
            try {
                const phoneSnapshot = yield verifyPhone(phone);
                this.verificationId = phoneSnapshot.verificationId;
            } catch (err) {
                return this.handleError();
            }
            this.endRequest();
        }),

        confirmPhoneCode: flow(function *(code: string) {
            this.startRequest();
            try {
                const credential = yield auth.PhoneAuthProvider.credential(this.verificationId, code);
                const firebaseUserCredential = yield auth().signInWithCredential(credential);
                userStore.upsertUser(userMapper(firebaseUserCredential.user?._user));
                this.verificationId = '';
            } catch (err) {
                this.handleError(err);
            }
            this.endRequest();
        }),
    };
}

export function AuthStoreDecorators() {
    return {
        verificationId: observable,
        isAuth: computed,

        setIsLoading: action,
        register: action,
        login: action,
        logout: action,
        loginWithGoogle: action,
        loginWithFacebook: action,
        loginWithPhone: action,
        confirmPhoneCode: action,
    };
}

export function AuthStore() {
    return decorate(
        assign(AuthStoreFactory(), BaseStoreFactory()),
        assign(AuthStoreDecorators(), BaseStoreDecorators())
    );
}

export default AuthStore();
