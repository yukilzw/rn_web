import { connect } from 'react-redux';
import {
    StackNavigator
} from 'react-navigation';

import routes from './config';

const MyApp = StackNavigator(routes);

/* const AppWithNavigationState = ({ dispatch }) => (
     <MyApp navigation={addNavigationHelpers({ dispatch })}/>
); */

const mapStateToProps = state => state;

export default connect(mapStateToProps)(MyApp);