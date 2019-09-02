import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView, I18nManager, Image } from 'react-native';
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Switch } from 'react-native-paper';
import Home from './components/Home';

I18nManager.forceRTL(true);

export default class App extends Component {
render(){
  return (
    <Router>
      <Stack key="root">
        <Scene key="home" component={Home} hideNavBar/>
      </Stack>
    </Router>
  );
}
}



AppRegistry.registerComponent('maedaExpress', () => App)