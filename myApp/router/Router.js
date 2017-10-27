import {
    StackNavigator,
    TabNavigator,
    addNavigationHelpers
} from 'react-navigation';
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    AsyncStorage
} from 'react-native';

import chooseArea from '../component/choose-area.js';
import departList from '../component/depart-list.js'

// 初始化StackNavigator
export default  MyApp = StackNavigator({
    default_:{
        screen:departList,
        navigationOptions:{
            headerTitle:"开发测试页面"
        }
    },
    // 将TabNavigator包裹在StackNavigator里面可以保证跳转页面的时候隐藏tabbar
    // 将需要跳转的页面注册在这里，全局才可以跳转
    Detail_0:{
        screen:chooseArea,
        navigationOptions:{
            headerTitle:"选择院区"
        }
    },
    Detail_1:{
        screen:departList,
        navigationOptions:{
            headerTitle:"选择科室"
        }
    }
});