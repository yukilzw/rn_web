import { AppRegistry } from 'react-native';
import App from './main';
import json from './app.json';

AppRegistry.registerComponent(json.name, () => App);

AppRegistry.runApplication(json.name, {
    initialProps: {},
    rootTag: document.getElementById('react-app')
});