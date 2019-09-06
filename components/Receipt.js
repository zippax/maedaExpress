import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, ScrollView, Alert, Linking} from 'react-native'
import { Router, Stack, Scene, Actions  } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon_f from 'react-native-vector-icons/Feather';

export default class Receipt extends Component{
    done(){
        Alert.alert(
            '',
            'انت على وشك انهاء الرحلة، هل انت متأكد من ذلك ؟',
            [
              {
                text: 'رجوع',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'نعم ، لقد اوصلت الطلب بنجاح', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
    }
    render(){
        return(
                <View style={styles.container} >
                    <View style={styles.header}>
                        <TouchableWithoutFeedback onPress={this.done}>
                            <Icon_f name="check-circle" size={30} color="#ccc" />
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
                                <Text>قيمة الطلب : 123 SR</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content}>
                      <ScrollView style={styles.scroll}>
                        <View style={styles.receipt}>
                            <View style={styles.receiptItem}>
                                <View style={styles.qtyHolder}>
                                    <Text style={styles.qty}>3</Text>
                                </View>
                                <Text style={styles.item}>شاورما لحم</Text>
                                <View style={styles.price}>
                                    <Text>SR 30.00</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.receipt}>
                            <View style={styles.receiptItem}>
                                <View style={styles.qtyHolder}>
                                    <Text style={styles.qty}>3</Text>
                                </View>
                                <Text style={styles.item}>شاورما دجاج</Text>
                                <View style={styles.price}>
                                    <Text>SR 30.00</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.receipt}>
                            <View style={styles.receiptItem}>
                                <View style={styles.qtyHolder}>
                                    <Text style={styles.qty}>2</Text>
                                </View>
                                <Text style={styles.item}>بروستد دجاج</Text>
                                <View style={styles.price}>
                                    <Text>SR  45.00</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.receipt}>
                            <View style={styles.receiptItem}>
                                <View style={styles.qtyHolder}>
                                    <Text style={styles.qty}>6</Text>
                                </View>
                                <Text style={styles.item}>كوكا كولا</Text>
                                <View style={styles.price}>
                                    <Text>SR 18.00</Text>
                                </View>
                            </View>
                        </View>
                      </ScrollView>
                    </View>
                    <View style={styles.footer}>
                        <TouchableWithoutFeedback onPress={()=> Actions.home()}>
                            <View style={styles.footerIcon}>
                                <Icon name="ios-reorder" size={30} color="#9D9B9F"/>
                                <Text style={styles.iconText}>الرحلات</Text>
                            </View>
                        </TouchableWithoutFeedback>
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
                    <TouchableWithoutFeedback onPress={()=>{Linking.openURL('tel:0545524751');}}>
                        <View style={styles.counter} >
                            <Text style={{ color: 'green' }}>اتصل بالزبون</Text>
                            <Icon name="ios-call" size={20} color="green" style={{ marginLeft: 10 }}/>
                        </View>
                    </TouchableWithoutFeedback>
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
      },
      scroll:{
          flex: 1
      },
      receipt:{
          backgroundColor: '#fff',
          padding: 15,
          justifyContent: 'center',
          alignItems: 'flex-start',
          borderBottomWidth: 1,
          borderBottomColor: '#eee'
      },
      receiptItem:{
          flexDirection: 'row',
          alignItems: 'center'
      },
      qtyHolder:{
        marginRight: 10,
        width: 30,
        height: 30,
        backgroundColor: '#eee',
        borderRadius: 50,
        justifyContent: 'center'
      },
      qty:{
        textAlign: 'center'
      },
      item:{

      },
      price:{
          flex: 1
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
        borderColor: 'green'
      },
})