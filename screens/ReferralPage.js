import React,{Component} from 'react';
import LottieView from 'lottie-react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
    Image,
    Alert
  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default class ReferralPage extends Component

{

    constructor(props)
    {
        super(props);
        this.state={name:'',email:'',mobile:'',jobRole:'',employeeName:''};
    }


    InsertRecord=()=>
    {
        
        var name=this.state.name;
        var email=this.state.email;
        var mobile=this.state.mobile;
        var jobRole=this.state.jobRole;
        var employeeName=this.state.employeeName;

        if(name.length==0 || email.length==0 || mobile.length==0 || jobRole.length==0 || employeeName.length==0)
        {
            alert("Required Field is Missing");
        }
        else
        {
                 var API="https://apmuat.aadharhousing.com/asset/public/api/Asset";
                 
            
                 fetch(API, 
                    {
                        method:'POST',
        
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({
                            "name":name,
                            "email":email,
                            "mobile":mobile,
                            "jobRole":jobRole,
                            "referredBy":employeeName
                          })
                    }
                    )
                
           .then((response)=>response.json())
           .then((response)=>
             {
                 Alert.alert("Successfully submitted","Your Referral has been Submitted");
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



        AsyncStorage.getItem('MainData')
        .then(res =>{
         if( res !== null){
    
       //Getting data from local storage
          this.state.employeeName = JSON.parse(res).employeeName;
       
       //setting into variable 
           const employeeName = this.state.employeeName;
      
    
       //setting into state
          this.setState({
            employeeName:employeeName,
        
          })
        
      
         }
         else{
           console.log("something went wrong")
         }
        });

        return(
            <SafeAreaView style={styles.container}>
          <View style={styles.header2}>
            <Icon name="chevron-left" color="black" size={35} onPress={()=>this.props.navigation.navigate('HomePage')}  />
             </View>
         <View style={{ alignItems: 'center',
    justifyContent: 'center',}}>
  <LottieView source={require('../assets/friends.json')} style={{height:200,width:200,alignContent:'center'}} autoPlay loop />
   </View>
              <View style={{alignItems: 'center'}}>
            
                <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                Refer your friend 
                </Text>
              </View>
      
              <View style={styles.action}>
                <FontAwesome name="user-o"  size={20} />
                <TextInput
                  placeholder="Enter your Friend's Name"
                  placeholderTextColor="#666666"
                  autoCorrect={false}
                  style={[
                    styles.textInput,
                    {
                      color: 'blue',
                    },
                  ]}
                  onChangeText={name=>this.setState({name})}
                />
              </View>
           
              <View style={styles.action}>
                <Feather name="phone"  size={20} />
                <TextInput
                  placeholder="Enter your Friend's phone"
                  placeholderTextColor="#666666"
                  keyboardType="number-pad"
                  autoCorrect={false}
                  style={[
                    styles.textInput,
                    {
                        color: 'blue',
                    },
                  ]}
                  onChangeText={email=>this.setState({email})}
                />
              </View>
              <View style={styles.action}>
                <FontAwesome name="envelope-o" size={20} />
                <TextInput
                  placeholder="Enter your Friend's Email"
                  placeholderTextColor="#666666"
                  keyboardType="email-address"
                  autoCorrect={false}
                  style={[
                    styles.textInput,
                    {
                        color: 'blue',
                    },
                  ]}
                  onChangeText={mobile=>this.setState({mobile})}
                />
              </View>
              <View style={styles.action}>
                <FontAwesome name="globe" size={20} />
                <TextInput
                  placeholder="Enter Job role "
                  placeholderTextColor="#666666"
                  autoCorrect={false}
                  style={[
                    styles.textInput,
                    {
                        color: 'blue',
                    },
                  ]}
                  onChangeText={jobRole=>this.setState({jobRole})}
                />
              </View>
              <View style={styles.action}>
                <Icon name="map-marker-outline"  size={20} />
                <TextInput
                  placeholder="Refered by"
                  placeholderTextColor="#666666"
                  autoCorrect={false}
                  style={[
                    styles.textInput,
                    {
                        color: 'blue',
                    },
                  ]}
                  editable = {false}
                  value={this.state.employeeName}
                />
              </View>
              <TouchableOpacity style={styles.commandButton} onPress={this.InsertRecord}>
                <Text style={styles.panelButtonTitle}>Submit</Text>
              </TouchableOpacity>
           
          </SafeAreaView>
        );
      };
      
    }
      
      const styles = StyleSheet.create({
        container: {
            padding:20,
          flex: 1,
          backgroundColor:'white'
        },
        commandButton: {
          padding: 15,
          borderRadius: 10,
          backgroundColor: '#374b92',
          alignItems: 'center',
          marginTop: 10,
        },
        panel: {
          padding: 10,
          backgroundColor: '#FFFFFF',
          paddingTop: 10,
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
          // shadowColor: '#000000',
          // shadowOffset: {width: 0, height: 0},
          // shadowRadius: 5,
          // shadowOpacity: 0.4,
        },
        header2: {
        
          width:'100%',
          height:50,
          top:0,
        
          justifyContent:'center',
        },
        header: {
          backgroundColor: '#FFFFFF',
          shadowColor: '#333333',
          shadowOffset: {width: -1, height: -3},
          shadowRadius: 2,
          shadowOpacity: 0.4,
          // elevation: 5,
          paddingTop: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        panelHeader: {
          alignItems: 'center',
        },
        panelHandle: {
          width: 40,
          height: 8,
          borderRadius: 4,
          backgroundColor: '#00000040',
          marginBottom: 10,
        },
        panelTitle: {
          fontSize: 27,
          height: 35,
        },
        panelSubtitle: {
          fontSize: 14,
          color: 'gray',
          height: 30,
          marginBottom: 10,
        },
        panelButton: {
          padding: 13,
          borderRadius: 10,
          backgroundColor: '#FF6347',
          alignItems: 'center',
          marginVertical: 7,
        },
        panelButtonTitle: {
          fontSize: 17,
          fontWeight: 'bold',
          color: 'white',
        },
        action: {
          flexDirection: 'row',
          marginTop: 10,
          marginBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2',
          paddingBottom: 5,
        },
        actionError: {
          flexDirection: 'row',
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#FF0000',
          paddingBottom: 5,
        },
        textInput: {
          flex: 1,
          marginTop: Platform.OS === 'ios' ? 0 : -12,
          paddingLeft: 10,
          color: '#05375a',
        },
      });