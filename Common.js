import {PixelRatio,Dimensions} from 'react-native';

const pt2px = pt=>PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px=>PixelRatio.roundToNearestPixel(px);

let designSize = {width:750,height:1336};

let pxRatio = PixelRatio.get();
let win_width = Dimensions.get("window").width;
let win_height = Dimensions.get("window").height;

let width = pt2px(win_width);
let height = pt2px(win_height);

let design_scale = designSize.width/width;
height = height*design_scale

let scale = 1/pxRatio/design_scale;

let px = px=>win_width*px/designSize.width;

export {px};