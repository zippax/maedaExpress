import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView, I18nManager, Image } from 'react-native';
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Switch } from 'react-native-paper';
import Home from './components/Home';
import Order from './components/Order'
import Message from './components/Message'
import Wallet from './components/Wallet'
import Setting from './components/Setting'

I18nManager.forceRTL(true);

export default class App extends Component {
render(){
  return (
    <Router>
      <Stack key="root" duration={0}>
        <Scene key="home" component={Home}  gesturesEnabled={false} hideNavBar={true} initial/>
        <Scene key="order" component={Order}  gesturesEnabled={false} hideNavBar={true} />
        <Scene key="message" component={Message}  gesturesEnabled={false} hideNavBar={true} />
        <Scene key="wallet" component={Wallet}  gesturesEnabled={false} hideNavBar={true} />
        <Scene key="setting" component={Setting}  gesturesEnabled={false} hideNavBar={true} />
      </Stack>
    </Router>
  );
}
}



AppRegistry.registerComponent('maedaExpress', () => App)