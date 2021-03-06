import { StyleSheet, Text, View, TouchableOpacity,Dimensions,Image,ScrollView ,SafeAreaView, BackHandler} from 'react-native'
import React, { Component , useState} from 'react'
import { SliderBox } from "react-native-image-slider-box";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Storage from 'react-native-expire-storage';
import { WebView } from 'react-native-webview';
import Loader from '../utils/Loader';
export default class BusinessCard extends Component {

 

  constructor(props)
  {
      super(props);
    
      this.state={empId:'',isLoading:true,};
  }


  componentDidMount = async () => {

    setTimeout(() =>{
     
       this.setState({isLoading:false})
  
    },3000)
  
  }
  


  render() {
    
   

    const { navigation } = this.props;
    
    Storage.getItem('MainData')
    .then(res =>{
     if( res !== null){

   //Getting data from local storage
      this.state.empId = JSON.parse(res).empId;
   
   //setting into variable 
       const empId = this.state.empId;
     
   //setting into state
      this.setState({
        employeeID:empId,
       
      })
    
  
     }
     else{
       console.log("something went wrong")
     }
    });
     
   
  const link = 'https://myadhp.aadharhousing.com/myaadhar/public/api/businesscard?empId='+this.state.empId;
     
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
 source={{uri: link}}
 style={{marginTop: 20}}

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