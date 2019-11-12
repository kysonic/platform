// @flow

export function uniq(a: Array<any>): Array<any> {
    return a.filter( (v, i, a) => a.indexOf(v) === i );
}
