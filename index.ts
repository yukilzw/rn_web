import { AppRegistry } from 'react-native';
import App from './main';
import json from './app.json';

AppRegistry.registerComponent(json.name, () => App);
