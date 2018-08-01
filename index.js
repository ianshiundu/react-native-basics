/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
// import some Bananas
import Bananas from './Bananas';
// import LotsOfGreetings
import LotsOfGreetings from './LotsOfGreetings';
import BlinkApp from './Blink';
import LotsOfStyles from './LotsOfStyles';
import FixedDimensionsBasics from './FixedDimensionsBasics';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);
