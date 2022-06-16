import { StyleSheet, Text, View, TouchableOpacity,Dimensions,Image,ScrollView ,SafeAreaView, BackHandler} from 'react-native'
import React, { Component , useState} from 'react'
import { SliderBox } from "react-native-image-slider-box";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WebView } from 'react-native-webview';
import Loader from '../utils/Loader';
import Storage from 'react-native-expire-storage';
export default class AgencyLogin extends Component {

 

  constructor(props)
  {
      super(props);
    
      this.state={isLoading:true,};
  }


  componentDidMount = async () => {

    setTimeout(() =>{
     
       this.setState({isLoading:false})
  
    },3000)
  
  }
  
  webView = {
    canGoBack: false,
    ref: null,
  }

  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }


  render() {
    

    return (
 
      <SafeAreaView style={styles.container}>
     
   <Loader loading={this.state.isLoading}/>
 <WebView
 source={{uri:'https://uam.tcsindiasolutions.com/auth/realms/Aadhar/protocol/openid-connect/auth?client_id=Platform&redirect_uri=https%3A%2F%2Fwww.tcsindiasolutions.com%2F%23%2Fnbfc%2FAadhar-login&state=3f2ae48a-fa7a-4dff-8b64-6845a34843d9&response_mode=fragment&response_type=code&scope=openid&nonce=2329af80-babe-4148-9cce-e563189ce1d2'}}
 style={{marginTop: 20}}
 ref={(webView) => { this.webView.ref = webView; }}
        onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
/>
 </SafeAreaView>
 
    );
  }
}
const styles = StyleSheet.create({
 

  container:{
    flex:1,
    backgroundColor:'white'
  },
  header2: {
         
   width:'100%',
   height:50,
   top:0,
  
   justifyContent:'center',
 },
 menu:{
   alignSelf: 'flex-start',
   position:'absolute',
   paddingLeft:20,
   
 
 },
 
 });