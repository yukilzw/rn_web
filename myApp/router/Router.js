import React from 'react';
import { connect } from 'react-redux';
import {
    StackNavigator,
    TabNavigator,
    addNavigationHelpers
} from 'react-navigation';

import chooseArea from '../component/choose-area.js';
import departList from '../component/depart-list.js'

// 初始化StackNavigator
const MyApp = StackNavigator({
    default_:{
        screen:departList,
        navigationOptions:{
            header:null,
        }
    },
    //
    Detail_0:{
        screen:chooseArea,
        navigationOptions:{
            header:null,
            gesturesEnabled:true,
        }
    },
    Detail_1:{
        screen:departList,
        navigationOptions:{
            header:null,
            gesturesEnabled:true,
        }
    }
});

/*const AppWithNavigationState = ({ dispatch }) => (
     <MyApp navigation={addNavigationHelpers({ dispatch })}/>
);*/

const mapStateToProps = state => {
    return state
};

export default connect(mapStateToProps)(MyApp);