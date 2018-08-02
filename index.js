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
import FlexDimensionsBasics from './FlexDimensionsBasics';
import FlexDirectionBasics from './FlexDirectionBasics';
import JustifyContentBasics from './JustifyContentBasics';
import AlignItemsBasics from './AlignItemsBasics';
import HandlingTextInput from './HandlingTextInput';
import ButtonBasics from './ButtonBasics';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
