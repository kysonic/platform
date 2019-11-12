// @flow

import {uniq} from '@utils/array';

export function removeEmpty(obj: Object): Object {
    return Object.entries(obj).reduce((a,[k,v]) => (v ? {...a, [k]:v} : a), {});
}

export function mergeWithArrayConcat(obj1: Object, obj2: Object): Object {
    return Object.entries(obj2).reduce((a,[k,v]) => {
        if (Array.isArray(a[k]) && Array.isArray(v)) {
            v = uniq(a[k].concat(v));
        }
        return {...a, [k]: v};
    }, obj1);
}
