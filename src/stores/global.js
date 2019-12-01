// @flow

import {observable, action, computed, decorate} from 'mobx';

const CLEAN_ROUTES = ['Preloader', 'Auth', 'NotConnected'];
const TRANSLUCENT_STATUS_BAR = ['Profile'];

export type GlobalStoreType = {
    route: string,
    statusBarEnabled: boolean,
    footerEnabled: boolean,
    isConnected: boolean,

    setRoute: (route: string) => void,
    setIsConnected: (isConnected: boolean) => void,
}

export function GlobalStoreFactory(): GlobalStoreType {
    return {
        route: 'Preloader',
        isConnected: false,

        get statusBarEnabled() {
            return !CLEAN_ROUTES.includes(this.route);
        },

        get footerEnabled() {
            return !CLEAN_ROUTES.includes(this.route);
        },

        get isTranslucentStatusBar() {
            return TRANSLUCENT_STATUS_BAR.includes(this.route);
        },

        setRoute(route) {
            this.route = route;
        },

        setIsConnected(isConnected) {
            this.isConnected = isConnected;
        },
    };
}

export function GlobalStoreDecorators(): any {
    return {
        route: observable,
        isConnected: observable,
        statusBarEnabled: computed,
        footerEnabled: computed,
        isTranslucentStatusBar: computed,

        setRoute: action,
    };
}

export function GlobalStore() {
    return decorate(GlobalStoreFactory(), GlobalStoreDecorators());
}

export default GlobalStore();
