import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, { useEffect, useState, Component} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
export default class Profile extends Component {



constructor(props)
{
    super(props);
    this.state={city:'',employeeName:'',empId:'',department:'',email:''};
  
}

render()
{
  AsyncStorage.getItem('MainData')
    .then(res =>{
     if( res !== null){

   //Getting data from local storage
      this.state.employeeName = JSON.parse(res).employeeName;
      this.state.city = JSON.parse(res).city;
      this.state.department = JSON.parse(res).department;
      this.state.empId = JSON.parse(res).empId;
      this.state.email = JSON.parse(res).email;

   //setting into variable 
       const employeeName = this.state.employeeName;
       const city = this.state.city;
       const department = this.state.department;
       const empId = this.state.empId;
       const email = this.state.email;

   //setting into state
      this.setState({
        employeeName:employeeName,
        city:city,
        department:department,
        empId:empId,
        email:email
      })
    
  
     }
     else{
       console.log("something went wrong")
     }
    });
     
  return (
    // <View>
    //   <Text>NOOOO</Text>
    //   <Text>{this.state.employeeName}</Text>
    //   <Text>{this.state.city}</Text>
    //   <Text>{this.state.department}</Text>
    //   <Text>{this.state.email}</Text>
    //   <Text>{this.state.empId}</Text>
    // </View>

    <View style={styles.container}>
     
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity >
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:50
          }}>
         
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
               
              }}>
       <View style={{ alignItems: 'center',
    justifyContent: 'center',}}>
  <LottieView source={require('../assets/profile.json')} style={{height:159,width:150,alignContent:'center'}} autoPlay loop />
   </View>
            </View>
        
        </View>
      </TouchableOpacity>
      <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold',textTransform: 'uppercase'}}>
        {this.state.employeeName}
      </Text>
  
  




  
  
    </View>

  


    <View style={styles.action}>
     


     <View style={{paddingBottom:30}}>
 
 <Text style={styles.label}>Employee ID</Text>
 <View style={styles.input}>
 
 <Icon 
                                name="person"
                                color="#374b92"
                                size={20}
                              
                                />
                                <TextInput
 
 value={this.state.empId}
 autoCapitalize="none"

 
 
 
 />
 
 
 </View>
 
 
 <Text style={styles.label}>Email address</Text>
 <View style={styles.input}>
 <Icon name="mail" color="#374b92"size={20} />
 <TextInput
value={this.state.email}
 />
 </View>

 <Text style={styles.label}>Department</Text>
 <View style={styles.input}>
 <Icon name="build" color="#374b92"size={20} />
 <TextInput
 value={this.state.department}
 />
 </View>
 <Text style={styles.label}>City</Text>
 <View style={styles.input}>
 <Icon name="location" color="#374b92"size={20} />
 <TextInput
   value={this.state.city}
 />
 </View>

 <View style={styles.input2}>
 <View>
  <LottieView source={require('../assets/reward.json')} style={{height:100,width:100}} autoPlay loop />
   </View>
   <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:-15}}>Reward</Text>
   <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>100.pts</Text>
 
 </View>


 
  </View>
 
     </View>
    
   

   
  
 
</View>

  );
}
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:'white'
  },


  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  input:{
    height:55,
    backgroundColor:'#D3D3D3',
    flexDirection:'row',
    paddingHorizontal:15,
  
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius:20,
    alignItems:'center'
  },
  input2:{
    marginTop:30,
    height:55,
    backgroundColor:'#FFFF33',
    flexDirection:'row',
    paddingHorizontal:15,
  
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius:20,
    alignItems:'center'
  },
  label:{
    marginVertical:7,
    fontSize:14,
    
  }
 
});