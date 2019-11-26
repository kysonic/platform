// @flow
import {observable, action, decorate, flow} from 'mobx';
import {uid} from '@utils/string';
import {BaseStoreFactory, BaseStoreDecorators} from './base';
import {assign} from '@utils/object';
import {delay} from '@utils/promise';

import notificationData from '@assets/data/notifications.json';

const FEED_URL = 'https://demo2-web-qa.corebine.com/api/cards/en/1.json?q={"_type":"Corebine.Core.Feed.Corebine.Cards","types":["Corebine.Core.Card.Photo","Corebine.Core.Card.Social"],"sources":[],"tags":[],"readOnly":false}';


export type NewsStoreType = {
    news: Array<any>,

    addNews: (data: any) => void,
    removeNews: (id: string) => void,
    fetch: () => Promise<any>,
}

export function NewsStoreFactory(): NewsStoreType {
    return {
        news: [],

        addNews(data) {
            data.id = data.id || uid();
            this.notifications.push(data);
        },

        removeNews(id) {
            const notificationIndex = this.notifications.findIndex(notification => notification.id === id);
            this.notifications.splice(notificationIndex, 1);
        },

        fetch: flow(function *() {
            this.startRequest();
            const response = yield fetch(FEED_URL);
            const responseData = yield response.json();
            this.news = responseData.data;
            this.endRequest();
        }),
    };
}

export function NewsStoreDecorators(): any {
    return {
        notifications: observable,

        addNews: action,
        removeNews: action,
        fetch: action,
    };
}

export function NewsStore() {
    return decorate(
        assign(NewsStoreFactory(), BaseStoreFactory()),
        assign(NewsStoreDecorators(), BaseStoreDecorators()),
    );
}

export default NewsStore();
