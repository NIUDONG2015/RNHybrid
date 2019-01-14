/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoadMorePage from "./js/page/LoadMorePage";

AppRegistry.registerComponent(appName, () => LoadMorePage);
AppRegistry.registerComponent("test", () => App);
