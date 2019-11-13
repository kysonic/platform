// @flow

import {observable, action, decorate} from 'mobx';

export type BaseStoreType = {
    isLoading: boolean,
    error: string,

    setIsLoading: (isLoading: boolean) => void,
    setError: (error: string) => void,
    handleError: (err: Error) => void,
    startRequest: () => void,
    endRequest: () => void,
}

export function BaseStoreFactory(): BaseStoreType {
    return {
        isLoading: false,
        error: '',

        setIsLoading(isLoading: boolean): void {
            this.isLoading = isLoading;
        },

        setError(error: string): void {
            this.error = error;
        },

        handleError(err: Error) {
            console.log(err);
            this.error = err.message;
            this.isLoading = false;
        },

        startRequest() {
            this.isLoading = true;
            this.error = '';
        },

        endRequest() {
            this.isLoading = false;
            this.error = '';
        },
    };
}

export function BaseStoreDecorators(): any {
    return {
        isLoading: observable,
        error: observable,

        setIsLoading: action,
        setError: action,
        handleError: action,
        startRequest: action,
    };
}

export function BaseStore() {
    return decorate(BaseStoreFactory(), BaseStoreDecorators());
}

export default BaseStore();
