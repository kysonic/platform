// @flow
import {observable, action, decorate, flow} from 'mobx';
import {BaseStoreFactory, BaseStoreDecorators} from './base';
import {assign} from '@utils/object';


export type PageStoreType = {
    url?: string,
    content: any,

    fetch: () => Promise<any>,
}

export function PageStoreFactory(url?: string): PageStoreType {
    return {
        url: url,
        content: [],

        fetch: flow(function *() {
            this.startRequest();
            const response = yield fetch(this.url);
            const responseData = yield response.json();
            this.content = responseData.data?.content || [];
            this.endRequest();
        }),
    };
}

export function PageStoreDecorators(): any {
    return {
        url: observable,
        content: observable.shallow,

        fetch: action,
    };
}

export function PageStore(url?: string) {
    return decorate(
        assign(PageStoreFactory(url), BaseStoreFactory()),
        assign(PageStoreDecorators(), BaseStoreDecorators()),
    );
}

export default PageStore();
