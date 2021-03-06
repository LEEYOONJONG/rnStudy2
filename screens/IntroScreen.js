import * as React from 'react';
import { StyleSheet, Button, View, Text, ScrollView } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from './buttons/CustomButton';
import MenuButton from './buttons/MenuButton';
import Icon from 'react-native-vector-icons/Ionicons';

// import {IntroScreen} from './IntroScreen';
export function IntroScreen({ navigation, route }) {

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.title}>
        <Text style={{ fontSize: 30 }}>우리</Text>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>모일래?</Text>
      </View>
      <View style={styles.content} />
      <View style={styles.footer}>
        <CustomButton buttonColor={'#7c5b62'} title={'회원가입'} titleColor='white' onPress={() => navigation.navigate('signup')} />
        <CustomButton buttonColor={'#846584'} title={'로그인'} titleColor='white' onPress={() => navigation.navigate('login')} />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 30,
      paddingTop:30,
      paddingRight:30,
      flexDirection: 'column',
      backgroundColor: 'white',
    },
    header: {
      width: '100%',
      height: 120,
      // backgroundColor: 'yellow',
    },
    title: {
      width: '100%',
      height: 100,
      alignItems: 'flex-start',
      justifyContent: 'center',
      // backgroundColor: 'blue',
      color: 'black',
      fontSize: 40,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      // paddingBottom: 30,
      // backgroundColor: 'green',
    },
    footer: {
      width: '100%',
      height: '20%',
    },
    topbar: {
      width: '100%',
      height: 100,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      borderBottomColor: '#dbdbdb',
      borderBottomWidth: 0.5,
      padding: 5,
    },
    topbartext: {
  
      height: 50,
      fontSize: 40,
      fontWeight: 'bold',
      // backgroundColor:'blue',
    },
    topbarmenu: {
  
      // backgroundColor:'green',
      fontSize: 30,
      marginBottom: 5,
    },
    scroll:{
      width: '100%',
      height: '100%',
      flex: 1,
      // backgroundColor: 'green',
    },
    myblock:{
      width:'100%',
      height: 150,
      // backgroundColor: 'orange',
      borderRadius: 15,
      marginTop: 15,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    myblocktitleview:{
      width: '100%',
      flexDirection: 'row',
      alignItems: 'flex-end',
      // backgroundColor:'green',
      justifyContent: 'space-between',
      
    },
    myblocktitle:{
      marginTop: 10,
      marginLeft: 15,
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white',
    },
    myblockbutton:{
      backgroundColor: 'green',
      color: 'white',
      marginRight: 10,
      marginTop: 10,
      borderRadius: 10,
      paddingHorizontal:15,
      paddingVertical:5,
    },
    myblockbuttontext:{
      color: 'white',
      fontSize: 16,
      fontWeight:'bold',
    },
  
    myblocksubtitle:{
      fontSize: 18,
      color: 'white',
      marginLeft: 25,
      marginTop: 10,
      fontWeight:'bold',
    },
    myblocktextview:{
      flex:1,width:'100%',alignItems: 'center', justifyContent:'center',
    },
    myblocktext:{
      color:'white',
      fontSize: 18,
      
    },
  
    groupvertical:{
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      
    },
    grouphorizontal:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    groupblockL:{
      flex:0.5,
      height:150,
      backgroundColor:'green',
      marginTop: 15,
      marginRight:15,
      borderRadius:10,
      justifyContent:'space-between',
    },
    groupblockR:{
      flex:0.5,
      height:150,
      backgroundColor:'green',
      marginTop: 15,
      borderRadius:10,
      justifyContent:'space-between',
    },
    groupblocktitle:{
      marginTop: 10,
      marginLeft: 15,
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    groupblockmenubar:{
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    groupblockmenu:{
      fontSize: 25,
      color: 'white',
      marginBottom: 5,
      marginRight:5,    
    },
    separator: {
      marginVertical: 4,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });