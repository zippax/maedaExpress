import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, I18nManager, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Switch } from 'react-native-paper';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import Icon_f from 'react-native-vector-icons/Feather';
I18nManager.forceRTL(true);

export default class Message extends Component {
render(){
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback>
            <Icon_f name="volume" size={25} color="#ccc" />
        </TouchableWithoutFeedback>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <View style={styles.orderInfo}>
                <Text style={styles.infoTextHeader}>إدارة مائدة</Text>
                <Text style={styles.infoText}>عرض اليوم : عند اجتيازك ٢٠ رحلة ناجحة، ستم اضافة ٥٠ ريال لرصيد نقاطك</Text>
                <View style={[styles.light]}>
                    <Text style={{ color: '#ccc' }}>03 SEP, 2019</Text>
                </View>
                </View>
            </View>
            </View>
            <View style={styles.card}>
            <View style={styles.cardContent}>
                <View style={styles.orderInfo}>
                <Text style={styles.infoTextHeader}>إدارة مائدة</Text>
                <Text style={styles.infoText}>تم شحن رصيدك بقيمة 500 ريال</Text>
                <View style={[styles.light]}>
                    <Text style={{ color: '#ccc' }}>01 SEP, 2019</Text>
                </View>
                </View>
            </View>
            </View>
        </ScrollView>
      <View style={styles.footer}>
        <TouchableWithoutFeedback onPress={()=> Actions.home()}>
            <View style={styles.footerIcon}>
            <Icon name="ios-reorder" size={30} color="#9D9B9F" />
            <Text style={[styles.iconText, {color: '#9D9B9F'}]}>الرحلات</Text>
            </View>
        </TouchableWithoutFeedback>
        <View style={styles.footerIcon}>
          <Icon name="ios-notifications" size={30} color="#000" />
          <Text style={[styles.iconText, {color: '#000'}]}>التنبيهات</Text>
        </View>
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
    padding: 15,
    paddingTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
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
    padding: 20,

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
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 50,
    position: 'absolute',
    right: -20,
    top: -5,
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
  }
});