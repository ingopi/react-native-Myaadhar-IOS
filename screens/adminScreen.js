import { StyleSheet, Text, View, TouchableOpacity,Dimensions,Image,ScrollView ,SafeAreaView, BackHandler} from 'react-native'
import React, { Component , useState} from 'react'
import { SliderBox } from "react-native-image-slider-box";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WebView } from 'react-native-webview';
import Loader from '../utils/Loader';
import Storage from 'react-native-expire-storage';
export default class adminScreen extends Component {

 

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
      <View  style={styles.header2}>
        <TouchableOpacity style={{width:'30%',height:'100%',marginTop:'5%'}} 
        onPress={()=>this.props.navigation.navigate('HomePage')}>
        <Icon style={styles.menu} name="chevron-left" color="#00237D" size={40} />
    <Text style={{justifyContent:'center',alignContent:'center',paddingLeft:55,paddingTop:7,fontWeight:'bold',color:'#00237D',fontSize:20}}>Back</Text> 
        </TouchableOpacity>
     
        </View>
   <Loader loading={this.state.isLoading}/>
 <WebView
 source={{uri:'https://live.quickfms.com/WebFiles/frmDetails.aspx'}}
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