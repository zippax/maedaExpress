import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, ScrollView} from 'react-native'
import { Router, Stack, Scene, Actions  } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon_f from 'react-native-vector-icons/Feather';

export default class Order extends Component{
    render(){
        return(
                <View style={styles.container} >
                    <View style={styles.header}>
                        <TouchableWithoutFeedback onPress={()=> Actions.home()}>
                            <Icon_f name="arrow-left" size={30} color="#000" />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.panel}>
                        <View style={styles.infoHolder}>
                            <View style={styles.logoHolder}>
                                <Image
                                    style={{width: 60, height: 60}}
                                    source={{uri: 'https://www.maeda.com.sa/i/images/eafd51f43eff2900cde85b56a1c26bc96.png'}}
                                />
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.headerText}>مطعم مدد</Text>
                                <Text style={styles.infoText}>التوصيل الى : سيهات - حي السلام، مقابل بلدية سيهات</Text>
                            </View>
                        </View>
                        <View style={styles.pricesHolder}>
                            <View style={styles.deliveryPrice}>
                                <Text>قيمة التوصيل : 12 SR</Text>
                            </View>
                            <View style={styles.orderPrice}>
                                <Text>قيمة الطلب : 95 SR</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.acceptHolder}>
                            <Icon_f name="plus-circle" size={30} color="#2c5c09" style={{ marginRight: 10 }}/>
                            <Text style={styles.acceptText}>قبول الطلبية</Text>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.footerIcon}>
                        <Icon name="ios-reorder" size={30} color="#9D9B9F"/>
                        <Text style={styles.iconText}>الرحلات</Text>
                        </View>
                        <View style={styles.footerIcon}>
                        <Icon name="ios-notifications" size={30} color="#9D9B9F" />
                        <Text style={styles.iconText}>التنبيهات</Text>
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
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F3F8F9',
    },
    header:{
        paddingRight: 10,
        paddingTop: 30,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    infoHolder:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingBottom: 20
    },  
    logoHolder:{
       marginRight: 15
    },
    info:{
        justifyContent: 'center',
        flexWrap: 'wrap',
        flex: 1,
    },
    infoText:{
        textAlign: 'left'
    },
    headerText: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 'bold'
    },
    content:{
        flex: 1,
        paddingTop: 20
    },
    acceptHolder:{
        alignSelf: 'center',
        backgroundColor: '#A2CF2F',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 50,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    acceptText:{
        fontSize: 16,
        color: '#2c5c09',
        fontWeight: 'bold'
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
      pricesHolder:{
          backgroundColor: '#fff',
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingBottom: 20
      },
      deliveryPrice: {
        backgroundColor: '#eee',
        marginRight: 10,
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
})