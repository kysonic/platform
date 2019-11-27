// @flow
import {Dimensions} from 'react-native';

export function get916Dimensions() {
    const {width} = Dimensions.get('window');
    const height = Math.round(width * 9 / 16);

    return {width, height};
}
