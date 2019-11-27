// @flow
import config from '@config';
import {pick} from '@utils/object';

import type {CloudinaryImageType} from '@types/base';

const {cloudinary: {baseUrl}} = config;

const CLOUDINARY_PARAMS = ['focus', 'crop'];

const MAP_PARAMS = {
    crop: 'c',
    focus: 'g',
    format: 'f',
    width: 'w',
    height: 'h',
    dpr: 'dpr',
    quality: 'q',
    background: 'b',
};

export function convertParams(params: any): string {
    return Object.entries(params).map(([k,v]) => (`${MAP_PARAMS[k]}_${v}`)).join(',');
}

export function getCloudinaryPath(image: CloudinaryImageType) {
    return `${baseUrl}${convertParams(pick(image, CLOUDINARY_PARAMS))}/v1/${image.id}`;
}
