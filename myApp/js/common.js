import { PixelRatio, Dimensions } from 'react-native';

const pt2px = pt => PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px => PixelRatio.roundToNearestPixel(px);

let designSize = { width: 750, height: 1336 };

const pxRatio = PixelRatio.get();
const win_width = Dimensions.get('window').width;
const win_height = Dimensions.get('window').height;

const width = pt2px(win_width);
const height = pt2px(win_height);

let px = px => win_width * px / designSize.width;

export { px, win_width, win_height, width, height };