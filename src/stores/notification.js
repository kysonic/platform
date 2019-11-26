// @flow
import {observable, action, decorate, flow} from 'mobx';
import {uid} from '@utils/string';
import {BaseStoreFactory, BaseStoreDecorators} from './base';
import {assign} from '@utils/object';
import {delay} from '@utils/promise';

import notificationData from '@assets/data/notifications.json';

export type NotificationType = {
    id: string,
    line: string,
    subline?: string,
}

export function NotificationFactory(data: NotificationType): NotificationType {
    return Object.assign({
        id: '',
        line: '',
        subline: '',
    }, data);
}

export function NotificationDecorators() {
    return {
        line: observable,
        subline: observable,
    };
}

export function Notification(data: NotificationType) {
    return decorate(NotificationFactory(data), NotificationDecorators());
}

export type NotificationStoreType = {
    notifications: Array<NotificationType>
}

export function NotificationStoreFactory(): NotificationStoreType {
    return {
        notifications: [],

        addNotification(data) {
            data.id = data.id || uid();
            this.notifications.push(Notification(data));
        },

        removeNotification(id) {
            const notificationIndex = this.notifications.findIndex(notification => notification.id === id);
            this.notifications.splice(notificationIndex, 1);
        },

        fetch: flow(function *() {
            this.startRequest();
            yield delay(Math.random() * 2000 + 500);
            this.notifications = notificationData;
            this.endRequest();
        }),
    };
}

export function NotificationStoreDecorators(): any {
    return {
        notifications: observable.shallow,

        addNotification: action,
        removeNotification: action,
        fetch: action,
    };
}

export function NotificationStore() {
    return decorate(
        assign(NotificationStoreFactory(), BaseStoreFactory()),
        assign(NotificationStoreDecorators(), BaseStoreDecorators()),
    );
}

export default NotificationStore();
