import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView, I18nManager } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

I18nManager.forceRTL(true);

export default class App extends Component {
render(){
  return (
    <View style={styles.container}>
      <View style={styles.header}>

      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.card}>

        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerIcon}>
          <Icon name="ios-reorder" size={30} color="#9D9B9F" />
          <Text style={styles.iconText}>الرحلات</Text>
        </View>
        <View style={styles.footerIcon}>
          <Icon name="md-mail" size={30} color="#9D9B9F" />
          <Text style={styles.iconText}>البريد</Text>
        </View>
        <View style={styles.footerIcon}>
         <Icon name="ios-wallet" size={30} color="#9D9B9F" />
         <Text style={styles.iconText}>المحفظة</Text>
        </View>
        <View style={styles.footerIcon}>
         <Icon name="ios-settings" size={30} color="#9D9B9F" />
         <Text style={styles.iconText} >الإعدادات</Text>
        </View>
      </View>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8F9',
  },
  scroll:{
    flex: 1
  },
  header:{
    backgroundColor: '#ffffff',
    paddingTop: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  footer:{
    backgroundColor: '#ffffff',
    height: 80,
    flexDirection: 'row',
  }, 
  footerIcon:{
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center'
  },
  iconText:{
    color: '#9D9B9F'
  },
  card:{
    backgroundColor: '#ffffff',
    marginTop: 10,
    height: 100
  }
});

AppRegistry.registerComponent('maedaExpress', () => App)