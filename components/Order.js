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
                        <TouchableWithoutFeedback onPress={()=> Actions.pop()}>
                            <Icon_f name="arrow-left" size={30} color="#000" />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.panel}>
                        <View style={styles.infoHolder}>
                            <View style={styles.logoHolder}>
                                <Image
                                    style={{width: 60, height: 60}}
                                    source={{uri: 'https://logonoid.com/images/chipotle-logo.png'}}
                                />
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.headerText}>Chipotle</Text>
                                <Text style={styles.infoText}>Deliver to: Pittsburgh, 7 Allegeny Center</Text>
                            </View>
                        </View>
                        <View style={styles.pricesHolder}>
                            <View style={styles.deliveryPrice}>
                                <Text>Delivery Cost: $12</Text>
                            </View>
                            <View style={styles.orderPrice}>
                                <Text>Order Cost: $123</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <TouchableWithoutFeedback onPress={()=>Actions.receipt()}>
                            <View style={styles.acceptHolder}>
                                <Icon_f name="plus-circle" size={25} color="#2c5c09" style={{ marginRight: 10 }}/>
                                <Text style={styles.acceptText}>Accept the Order</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.footer}>
                        <TouchableWithoutFeedback onPress={()=> Actions.home()}>
                            <View style={styles.footerIcon}>
                                <Icon name="ios-reorder" size={30} color="#9D9B9F"/>
                                <Text style={styles.iconText}>Trips</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=> Actions.message()}>
                            <View style={styles.footerIcon}>
                                <Icon name="ios-notifications" size={30} color="#9D9B9F" />
                                <Text style={styles.iconText}>Notifications</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=> Actions.wallet()}>
                            <View style={styles.footerIcon}>
                                <Icon name="ios-wallet" size={30} color="#9D9B9F" />
                                <Text style={styles.iconText}>Wallet</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=> Actions.cover()}>
                            <View style={styles.footerIcon}>
                            <Icon name="md-map" size={30} color="#9D9B9F" />
                            <Text style={styles.iconText} >Map</Text>
                            </View>
                        </TouchableWithoutFeedback>
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
        paddingTop: 60,
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