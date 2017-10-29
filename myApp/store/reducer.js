import { combineReducers } from 'redux';

const hos_name = (state="left", action) => {
    switch (action.type) {
        case 'left':
            return "left"
        case 'right':
            return "right"
        default :
            return state
    }
}

//取决于这里你加入了多少 reducer
export default RootReducer = combineReducers({
    hos_name
});