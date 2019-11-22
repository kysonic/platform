// @flow

import {observable, action, computed, decorate} from 'mobx';

const CLEAN_ROUTES = ['Preloader', 'Auth'];
const TRANSLUCENT_STATUS_BAR = ['Profile'];

export type GlobalStoreType = {
    route: string,
    statusBarEnabled: boolean,
    footerEnabled: boolean,
}

export function GlobalStoreFactory(): GlobalStoreType {
    return {
        route: 'Preloader',

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
    };
}

export function GlobalStoreDecorators(): any {
    return {
        route: observable,
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
