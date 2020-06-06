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
import CommentList from './src/components/CommentList';
import {Router, Scene, Stack} from 'react-native-router-flux';

//console.disableYellowBox = true;
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
      <Scene
        key="photocomments"
        component={CommentList}
        title="Comments"
      />
    </Stack>
  </Router>
);

AppRegistry.registerComponent(appName, () => App);
