import { Animated } from 'react-native';

export interface ChooseAreaProps {
    navigation:  any;
}

export interface ChooseWrapAnimProps {
    type: string;
    style: any;
}

export interface ChooseWrapAnimStates {
    fadeAnim: Animated.Value;
    fadeAnim2: Animated.Value;
}

export interface ChooseWrapProps {
    chooseArea: (index: number) => void;
}

export interface MainProps {}

type SmallDepart = {
    key: string;
}

export interface MainStates {
    doctorName: string;
    chooseWrapShow: boolean;
    webViewIsShow: boolean;
    bigDepart: Array<string>;
    bigActive: number;
    smallDepart: Array<SmallDepart>;
}