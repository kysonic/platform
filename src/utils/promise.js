// @flow

export function delay(timeToDelay: number = 2000): Promise<boolean> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, timeToDelay);
    });
}
