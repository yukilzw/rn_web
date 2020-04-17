import { connect } from 'react-redux';
import { createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';

import routes from './config';

const MyNavigator = createSwitchNavigator(routes);

const MyApp = createBrowserApp(MyNavigator);

const mapStateToProps = state => state;

export default connect(mapStateToProps)(MyApp);