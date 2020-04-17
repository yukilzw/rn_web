import chooseArea from '../component/choose-area';
import departList from '../component/depart-list';

export default {
    default_: {
        screen: chooseArea,
        navigationOptions: {
            header: null
        }
    },
    Detail_0: {
        screen: chooseArea,
        navigationOptions: {
            header: null,
            gesturesEnabled: true
        }
    },
    Detail_1: {
        screen: departList,
        navigationOptions: {
            header: null,
            gesturesEnabled: true
        }
    }
};