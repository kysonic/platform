// @flow

import {uniq} from '@utils/array';


/**
 * Remove empty properties from object
 * @param obj
 * @returns {*}
 */
export function removeEmpty(obj: Object): Object {
    return Object.entries(obj).reduce((a,[k,v]) => (v ? {...a, [k]:v} : a), {});
}

/**
 * Merge with array concat
 * @param obj1 - defined object
 * @param obj2 - object to merge in
 * @returns {Object}
 */
export function mergeWithArrayConcat(obj1: Object, obj2: Object): Object {
    return Object.entries(obj2).reduce((a,[k,v]) => {
        if (Array.isArray(a[k]) && Array.isArray(v)) {
            v = uniq(a[k].concat(v));
        }
        return {...a, [k]: v};
    }, obj1);
}

/**
 * Assign with descriptors
 * @param target - target object
 * @param sources - objects to mix in
 * @returns {Object}
 */
export function assign(target: Object, ...sources: Object): Object {
    sources.forEach(source => {
        Object.defineProperties(target, Object.keys(source).reduce((descriptors, key) => {
            descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
            return descriptors;
        }, {}));
    });
    return target;
}
