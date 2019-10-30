// @flow
export function capitalizeFirst(s: string): string {
    return `${s.toString()[0].toUpperCase()}${s.slice(1)}`;
}
