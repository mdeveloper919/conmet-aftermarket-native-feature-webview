// import Reactotron from 'reactotron'
// Reactotron.connect({enabled: __DEV__})

import React, {
  AppRegistry,
  Component,
  Navigator,
  View,
  Text,
  StatusBar
} from 'react-native';



import Root from './app/containers/root';

AppRegistry.registerComponent('AftermarketApp', () => Root);
