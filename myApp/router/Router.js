import {
    StackNavigator,
    TabNavigator,
    addNavigationHelpers
} from 'react-navigation';

import chooseArea from '../component/choose-area.js';
import departList from '../component/depart-list.js'

// 初始化StackNavigator
export default  MyApp = StackNavigator({
    default_:{
        screen:chooseArea,
        navigationOptions:{
            header:null
        }
    },
    //
    Detail_0:{
        screen:chooseArea,
        navigationOptions:{
            header:null
        }
    },
    Detail_1:{
        screen:departList,
        navigationOptions:{
            header:null
        }
    }
});