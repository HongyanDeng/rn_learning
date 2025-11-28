/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Navigation } from "react-native-navigation";
//import App from './src/pages/Home';
import App from './src/pages/Recommend';
//import App from './src/utils/button'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
