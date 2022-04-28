
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
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


 export default class SignInScreen extends Component{



constructor(props)
{
    super(props);
    this.state={empId:'',fromUserOtp:'',fromCodeOtp:'',city:'',email:'',empId:'',department:'',employeeName:'',firstName:'',personalMobileNo:''};
}
 

//const [text, setText] = useState('');

GetOtp=()=>
    {
        var fromCodeOtp = '';
        var empId=this.state.empId;

        console.log("GetOtp");

        if(empId.length==0)
        {
           alert("Please Enter Employee ID");
         
        }
        else{
      
                 var API="https://myadhp.aadharhousing.com/myaadhar/public/api/verify";
                 
              

                 fetch(API, 
                    {
                        method:'POST',
        
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({
                            "empId":empId,
                           
                          })
                    }
                    )
                
           .then((response)=>response.json())
           .then((response)=>
             {
            
                console.log("response",response.message);

                if(response.message=="success")
                {
               // Alert.alert('Succesfully OTP  sent','OTP has been sent on your registered mobile number');
                // console.log(response.otp);
                this.state.fromCodeOtp = response.otp;
                this.state.city = response.city;
                this.state.email = response.email;
                this.state.empId = response.empId;
                this.state.department = response.department;
                this.state.employeeName = response.employeeName;
                this.state.firstName = response.firstName;
                this.state.personalMobileNo = response.personalMobileNo;
                //console.log(this.fromCodeOtp);
                    
 var data={

 
    city:this.state.city,
    email:this.state.email,
    empId:this.state.empId,
    department:this.state.department,
    employeeName:this.state.employeeName,
    firstName:this.state.firstName
 }
              


               
               //  alert('Mobilenumber',this.state.personalMobileNo);
                this.props.navigation.navigate('OtpScreen',{  
                     city:this.state.city,
                    email:this.state.email,
                    empId:this.state.empId,
                    department:this.state.department,
                    employeeName:this.state.employeeName,
                    firstName:this.state.firstName,
                    fromCodeOtp:this.state.fromCodeOtp,
                    personalMobileNo:this.state.personalMobileNo



                    
                });
              //  AsyncStorage.setItem('MainData',JSON.stringify(response));
              console.log("under the data", data);
                console.log("Reesponse",response);
                }
                else{
                    alert(response.message);
                    }
                
             }
            
           )
           .catch((error)=>{
         console.log(error)
            alert("Error"+error);
           })
        }
   }





        
        render()
        {
   
    
  return (
    
    <View style={styles.container}>
    <StatusBar backgroundColor='#00237D' barStyle="light-content"/>
  <View style={styles.header}>
      <Text style={styles.text_header}>Welcome to Aadhar Family!</Text>
  </View>
  <Animatable.View 
      animation="fadeInUpBig"
      style={[styles.footer, {
          backgroundColor: 'white'
      }]}
  >
       
       <View style={{ alignItems: 'center',
    justifyContent: 'center',}}>
  <LottieView source={require('../assets/employee.json')} style={{height:100,width:100,alignContent:'center'}} autoPlay loop />
   </View>
      {/* <Text style={[styles.text_footer, {
          color:'#374b92'
      }]}>Enter your Employee ID</Text> */}
      <View style={styles.action}>
      
                                {/* <Icon 
                                name="person-outline"
                                color="#374b92"
                                size={20}
                                /> */}
                            
          <TextInput 
            maxLength={10}
              placeholder="Enter your Employee ID"
              placeholderTextColor="#666666"
              style={[styles.textInput, {
                  color: 'black'
              }]}
              autoCapitalize="none"
              onChangeText={empId=>this.setState({empId})}
              
             
          />


               
           
            </View>
         
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity
                   onPress={this.GetOtp}
                    style={[styles.signInGet, {
                        borderColor: '#009387',
                        backgroundColor:'#00237D',
                   
                        alignItems:'center',
                        justifyContent: 'center', 
                        marginTop: 5,
                      
                    }]}
                >
                      <Text style={styles.textSign}>Generate OTP</Text>
          </TouchableOpacity> 
         </View>
  
  
              
               
       
            

       

{/* <View style={{

marginTop:20,


paddingHorizontal: 20,


}}>


   <Text style={{color:'red'}}>Note:</Text>
   <View style={styles.note}>
   <Text style={{paddingBottom:5}}>1 . Please enter your short name and validate OTP</Text>
   <Text style={{paddingBottom:5}}>2 . Incase your are not able to login, Contact AHFL Helpdesk Team.</Text>
   <Text style={{paddingBottom:5}}>3 . If you are first time user, Please ensure your Internet connection is On for Login.</Text>
  
 
   </View>


</View> */}


<View style={{flex: 1,}}>

<View style={{position: 'absolute', left: 0, right: 0, bottom: 0,alignItems:'center',justifyContent:'center'}}>
    
    <Text style={{color:'#00237D'}}>All Rights Reserved @AHFL Ltd.</Text></View>
</View>
        </Animatable.View>
      </View>
      
    );
}}
//export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#00237D'
      
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
    },
  
    underlineStyleHighLighted: {
      borderColor: "#03DAC6",
      },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
  
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        width: 300,
        height: 40,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom:10,
        borderRadius: 15, 
        fontSize: 16,textAlign: 'center'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIns: {
        width: '40%',
        height: 40,
       justifyContent:'center',
       alignContent:'center',
      alignItems:'center',
        borderRadius: 10,
        
    },
    signInGet: {
      width: '50%',
      height: 40,
      justifyContent:'center',
      justifyContent:'center',
      alignContent:'center',
     alignItems:'center',
    
      borderRadius: 20
  },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'white'
    },
    note:{
        
        textAlign: 'justify',  
color:'black',
borderTopLeftRadius: 40,
borderTopRightRadius: 40,
paddingHorizontal: 20,
    }
  });
