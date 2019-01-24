/** 导出你的js模块 供原生调用（android和ios均可用） */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoadMorePage from "./js/page/LoadMorePage";
import TestCitySelect from "./js/page/TestCitySelect";

AppRegistry.registerComponent(appName, () => LoadMorePage);
AppRegistry.registerComponent("test", () => TestCitySelect);
