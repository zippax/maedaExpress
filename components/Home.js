import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, I18nManager, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon_f from 'react-native-vector-icons/Feather';
import { Switch } from 'react-native-paper';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
I18nManager.forceRTL(true);

export default class Home extends Component {
  state = {
    isSwitchOn: false,
  };
render(){
  const { isSwitchOn } = this.state;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.isOn}>
          <Text> هل انت مستعد لإستقبال الطلبات ؟</Text>
          <View style={styles.switch}>
            <Switch
              value={isSwitchOn}
              onValueChange={() =>
                { this.setState({ isSwitchOn: !isSwitchOn }); }
              }
            />
          </View>
        </View>
      </View>
      <ScrollView style={styles.scroll} scrollEnabled={false}>
      <TouchableWithoutFeedback onPress={()=> Actions.order({id:'Madad'})}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.logoHolder}>
              <Image
                style={{width: 60, height: 60}}
                source={{uri: 'https://www.maeda.com.sa/i/images/eafd51f43eff2900cde85b56a1c26bc96.png'}}
              />
            </View>
            <View style={styles.orderInfo}>
              <Text style={styles.infoTextHeader}>مطعم مدد</Text>
              <Text style={styles.infoText}>التوصيل الى: سيهات - حي السلام، مقابل بلدية سيهات </Text>
              <View style={[styles.light, { backgroundColor: '#04D5BC' }]}></View>
            </View>

          </View>
          <View style={styles.pricesHolder}>
                <View style={styles.deliveryPrice}>
                    <Text>سيهات</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 10  }}>
                <Icon_f name="arrow-left" size={30} color="#000"/>
                </View>
                <View style={styles.orderPrice}>
                    <Text>سيهات</Text>
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
        
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerIcon}>
          <Icon name="ios-reorder" size={30} color="#000" />
          <Text style={[styles.iconText, {color: '#000'}]}>الرحلات</Text>
        </View>
        <TouchableWithoutFeedback onPress={()=> Actions.message()}>
          <View style={styles.footerIcon}>
            <Icon name="ios-notifications" size={30} color="#9D9B9F" />
            <Text style={styles.iconText}>التنبيهات</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=> Actions.wallet()}>
            <View style={styles.footerIcon}>
                <Icon name="ios-wallet" size={30} color="#9D9B9F" />
                <Text style={styles.iconText}>المحفظة</Text>
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=> Actions.cover()}>
        <View style={styles.footerIcon}>
         <Icon name="md-map" size={30} color="#9D9B9F" />
         <Text style={styles.iconText} >التغطية</Text>
        </View>
        </TouchableWithoutFeedback>
      </View>
      
      <View style={styles.counter}>
        <Text style={{ color: '#ccc' }}>23 TRIP / 24H</Text>
        <Icon name="ios-stats" size={20} color="#ccc" style={{ marginLeft: 10 }}/>
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
    padding: 10,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 5
  },
  isOn:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  switch:{
    flex: 1,
    alignItems: 'flex-end'
  },
  footer:{
    backgroundColor: '#ffffff',
    height: 80,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee'
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
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 5,
    padding: 10,
  },
  cardContent:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoHolder:{
    width: 60,
    height: 60,
    justifyContent:'center',
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 5
  },
  orderInfo:{
    justifyContent: 'flex-start',
    flex: 1,
  },
  infoText:{
    textAlign: 'left',
    flexWrap: 'wrap'
  },
  infoTextHeader:{
    textAlign: 'left',
    flexWrap: 'wrap',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  light:{
    width: 15,
    height: 15,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 5
  },
  counter:{
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 100,
    backgroundColor: '#fff',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#eee'
  },
  pricesHolder:{
      backgroundColor: '#fff',
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingBottom: 20,
      marginTop: 20
  },
  deliveryPrice: {
    backgroundColor: '#eee',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  orderPrice:{
    backgroundColor: '#eee',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});