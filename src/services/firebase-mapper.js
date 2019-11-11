// @flow

import {removeEmpty} from '@utils/object';

import type {FireBaseUserType} from '@types/firebase';

/**
 *   <<<<<<< Data sample >>>>>>>
 *
 *   "displayName": null,
 *   "email": "super@gmail.com",
 *   "emailVerified": false,
 *   "isAnonymous": false,
 *   "metadata": {"creationTime": 1573459413755, "lastSignInTime": 1573459413755},
 *   "phoneNumber": null,
 *   "photoURL": null,
 *   "providerData": [{
 *       "displayName": null,
 *       "email": "super@gmail.com",
 *       "phoneNumber": null,
 *       "photoURL": null,
 *       "providerId": "password",
 *       "uid": "super@gmail.com"
 *   }],
 *   "providerId": "firebase",
 *   "uid": "96dcxiWBBkRQZeMcMF05U988Dxl2"
*/

export function userMapper({uid, email, displayName, photoURL}: FireBaseUserType) {
    return removeEmpty({
        authId: uid,
        email: email,
        name: displayName,
        avatar: photoURL,
    });
}
