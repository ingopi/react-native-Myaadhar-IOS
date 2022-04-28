import { StyleSheet, Text, View } from 'react-native'
import React,  { Component }from 'react'

import { WebView } from 'react-native-webview';
import Loader from '../utils/Loader';
export default class BusinessCard extends Component {


  
  constructor()
  {
      super();
      this.state={
        isLoading:true,
      };
  }
componentDidMount = async () => {

  setTimeout(() =>{
   
     this.setState({isLoading:false})

  },4000)

}

    
  render() {
  
 
 
  
   
    return (
      <View style={styles.container}>
        <Loader loading={this.state.isLoading}/>
      <WebView
      source={{uri: 'https://dev.anoorcloud.in/Ajinkya_Shinde/'}}
      style={{marginTop: 20}}
     
    />
 </View>
    )
  
  }
}


   

const styles = StyleSheet.create({
 
 container:{
   flex:1
 }
 
});