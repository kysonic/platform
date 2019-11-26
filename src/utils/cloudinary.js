// @flow
import config from '@config';
import {pick} from '@utils/object';

const {cloudinary: {baseUrl}} = config;

export type CloudinaryImageType = {
    _type: 'Corebine.Core.Image.Cloudinary',
    id: string,
    focus: 'auto' | 'ocr_text' | 'face',
    crop: 'fill' | 'fit',
    alt: string,
}

const CLOUDINARY_PARAMS = ['focus', 'crop'];

export function convertParams(params: any): string {
    return Object.entries(params).map(([k,v]) => (`${k[0]}_${v}`)).join(',');
}

export function getCloudinaryPath(image: CloudinaryImageType) {
    return `${baseUrl}${convertParams(pick(image, CLOUDINARY_PARAMS))}/v1/${image.id}`;
}
