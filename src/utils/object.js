// @flow

export function removeEmpty(obj: Object): Object {
    return Object.entries(obj).reduce((a,[k,v]) => (v ? {...a, [k]:v} : a), {});
}
