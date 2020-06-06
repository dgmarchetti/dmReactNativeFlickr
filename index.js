/* eslint-disable prettier/prettier */
/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import AlbumList from './src/components/AlbumList';
import PhotoList from './src/components/PhotoList';
import {Router, Scene, Stack} from 'react-native-router-flux';

// Create a component
const App = () => (
  <Router>
    <Stack key="root">
      <Scene
        key="albumlist"
        component={AlbumList}
        title="Albums"
        initial={true}
      />
      <Scene
        key="photolist" 
        component={PhotoList} 
        title="Photos" />
    </Stack>
  </Router>
);

AppRegistry.registerComponent(appName, () => App);
