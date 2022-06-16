
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput,
  Platform,
  StyleSheet ,
  StatusBar,
  Alert
} from 'react-native';
import LottieView from 'lottie-react-native';
import React,{Component} from 'react';
import Storage from 'react-native-expire-storage';
import KeyboardAvoidingWrapper from '../utils/KeyboardAvoidingWrapper';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modals from '../utils/Modals';
export default class OtpScreen extends Component{



constructor(props)
{
  super(props);
   this.state={empId:'',fromUserOtp:'',fromCodeOtp:'',city:'',email:'',empId:'',department:'',employeeName:'',firstName:''};
 
}
state = {
  modalVisible: false
};

setModalVisible = (visible) => {
  this.setState({ modalVisible: visible });
}

      
      render()
      {
        const { modalVisible } = this.state;
        const { navigation } = this.props;
        const fromCodeOtp = this.props.route.params.fromCodeOtp;
        const firstName = this.props.route.params.firstName;
        const email = this.props.route.params.email;
        const empId = this.props.route.params.empId;
        const department = this.props.route.params.department;
        const employeeName = this.props.route.params.employeeName;
        const city = this.props.route.params.city;

        this.state.fromCodeOtp = fromCodeOtp;
        this.state.firstName = firstName;
        this.state.email = email;
        this.state.empId = empId;
        this.state.department = department;
        this.state.employeeName = employeeName;
        this.state.city = city;
            
      



        const personalMobileNo = this.props.route.params.personalMobileNo;
        
        const lastDigit = personalMobileNo.slice(-4);

        var data={
        
          city:this.state.city,
    email:this.state.email,
    empId:this.state.empId,
    department:this.state.department,
    employeeName:this.state.employeeName,
   
         
        
       }
  

        const login=(fromUserOtp)=>{
          console.log("Inside Login");
               
          
     
     
     
           if(this.state.fromUserOtp.length==0){
               Alert.alert("Please Enter OTP","OTP field can't be null");
           }
          else
          {
              if(this.state.fromCodeOtp == this.state.fromUserOtp ){
               
                 
    
                var API="https://myadhp.aadharhousing.com/myaadhar/public/api/storelog";
                 
            
                fetch(API, 
                   {
                       method:'POST',
       
                       headers: {
                           'Accept': 'application/json',
                           'Content-Type': 'application/json'
                         },
                         body: JSON.stringify({
                           "employeeName":this.state.employeeName,
                           "empId":this.state.empId,
                           "department":this.state.department,
                           "city":this.state.city,
                            "platform":"Android"
                         })
                   }
                   )
               
          .then((response)=>response.json())
         
          .catch((error)=>{
        console.log(error)
           alert("Something went wrong please contact AHFL helpdesk"+error);
          })      
     
     
       console.log("Im from otpscreen",data)
            
             
     
       this.props.navigation.navigate('HomePage');

      //  AsyncStorage.setItem('MainData',JSON.stringify(data));
            Storage.setItem('MainData',JSON.stringify(data) , 10080 * 60);
            
           
                  
           }
              else{
    Alert.alert("Invalid OTP!","Please Ensure that you have entered valid OTP");
               
       
              }
         
          }
          
      }
     
     
     

  
return (
  <KeyboardAvoidingWrapper>
  <View style={styles.StyledContainer}>
  <View style={styles.TopHalf}>
  <View style={styles.IconBg}>
  <View style={{ alignItems: 'center',
    justifyContent: 'center',}}>
  <LottieView source={require('../assets/lock.json')} style={{height:150,width:150,alignContent:'center'}} autoPlay loop />
   </View>
  </View>
  
  
  </View>
  
  <View style={styles.BottomHalf}>
  <Text style={styles.pageTitle}>Account verification</Text>
  <Text style={styles.Infotext}>Please enter the 4-digit code sent to <Text style={{fontWeight:'bold',fontStyle:'italic'}}>{'\n'}XXXXXX{lastDigit}</Text></Text>
  
  <View style={styles.CodeInput}>
  <TextInput
   style={styles.CodeInputText} 
             
                      placeholder="____"
                      placeholderTextColor="#6666"
                     
                      maxLength={4}
                      keyboardType='numeric'
                      autoCapitalize="none"
                      onChangeText={fromUserOtp=>this.setState({fromUserOtp})}
                      Text={fromUserOtp=>this.setState({fromUserOtp})}
  
                  
                  />
  </View>

<TouchableOpacity
                   
                   onPress={login}
                    style={[styles.StyledButton, {
                        borderColor: '#10B981',
                        borderWidth: 1,
                        
                        marginTop: 5,
                         

                        color:'white'
                    }]}
                    >
                        
                    <Text style={styles.textSign}> Verify </Text>
                    <Icon 
                                name="shield-checkmark"
                                color="white"
                                size={20}
                                />
          </TouchableOpacity> 
  </View>
  
  
  
  
  </View>
  
  </KeyboardAvoidingWrapper>
    )
  }
  
}
  
  const styles = StyleSheet.create({
    CodeInput:{
     minWidth:'15%', 
     padding:12,

    },
    CodeInputText:{
       fontSize:22,
       fontWeight:'bold',
       textAlign:'center',
       color:'green',
       letterSpacing:14
    },
    StyledButton:{
         flexDirection:'row',        
      padding:15,
      backgroundColor:'#10B981', //brand
      justifyContent:'center',
      alignItems:'center',
      borderRadius:5,
      marginVertical:5,
      height:60
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white'
},
    StyledContainer:{
     flex:1,
     padding:25,
     paddingTop:30,
     backgroundColor:'#ffffff',
     alignItems:'center',
    },
    TopHalf:{
      flex:1,
      justifyContent:'center',
      padding:20
     
    },
    IconBg:{
      width:250,
      height:250,
      backgroundColor:'rgba(16, 185, 129, 0.1)',
      borderRadius:250,
      justifyContent:'center',
      alignItems: 'center'
  
    },
    BottomHalf:{
      justifyContent:'space-around'
    },
    pageTitle:{
       fontSize:30,
       textAlign:'center',
       fontWeight:'bold',
       padding:10,
    },
  
   Infotext:{
  color:'#6B7280',
  fontSize:15,
  textAlign:'center',
   }
   
   
  })