import React,{Component} from 'react';
import LottieView from 'lottie-react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Storage from 'react-native-expire-storage';
import Loader from '../utils/Loader';
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
import DismissKeyboard from '../utils/DismissKeyboard';
import { SafeAreaView } from 'react-native-safe-area-context';
export default class ReferralPage extends Component

{

    constructor(props)
    {
        super(props);
        this.state={good:'',better:'',opinion:'',employeeName:'',department:'',isLoading:false};
    }


    InsertRecord=()=>
    {
        
        var good=this.state.good;
        var better=this.state.better;
        var opinion=this.state.opinion;
        var employeeName=this.state.employeeName;
        var department=this.state.department;

        if(good.length==0 ||opinion.length==0 || employeeName.length==0 || department.length==0)
        {
            alert("Required Field is Missing");
        }
        else
        {
                 this.setState({isLoading:true}) 
                 var API="https://myadhp.aadharhousing.com/myaadhar/public/api/feedback";
                 
            
                 fetch(API, 
                    {
                        method:'POST',
        
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({
                            "positiveFeedback":good,
                            "suggestions":opinion,
                            "department":department,
                            "employeeName":employeeName,
                            
                          })
                    }
                    )
                
           .then((response)=>response.json())
           .then((response)=>
             {
              this.setState({isLoading:false})
                 Alert.alert("Successfully submitted","Thank you for your valuable Feedback");
             }
            
           )
           .catch((error)=>{
         console.log(error)
         this.setState({isLoading:false})
            Alert.alert("Oops!","Something went wrong");
           })
        }
    }

     render()
     {



        Storage.getItem('MainData')
        .then(res =>{
         if( res !== null){
    
       //Getting data from local storage
          this.state.employeeName = JSON.parse(res).employeeName;
          this.state.department = JSON.parse(res).department;
       //setting into variable 
           const employeeName = this.state.employeeName;
           const department = this.state.department;
    
       //setting into state
          this.setState({
            employeeName:employeeName,
            department:department
          })
        
      
         }
         else{
           console.log("something went wrong")
         }
        });

        return(
        <DismissKeyboard>
            <SafeAreaView style={styles.container}>
            <Loader loading={this.state.isLoading}/>
            <View style={styles.header2}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomePage')}>
            <Icon name="chevron-left" color="black" size={35}/>
            <Text style={{paddingLeft:30,fontWeight:'bold',color:'#00237D',fontSize:20,position:'absolute',marginTop:5}}>Back</Text> 
            </TouchableOpacity>
             </View>
          
         <View style={{ alignItems: 'center',
    justifyContent: 'center',}}>
  <LottieView source={require('../assets/feedback.json')} style={{height:200,width:200,alignContent:'center'}} autoPlay loop />
   </View>
              <View style={{alignItems: 'center'}}>
            
                <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold',marginBottom:30}}>
                Give your Feedback
                </Text>
              </View>
      
              <View style={styles.action}>
                <Icon name="pencil-outline"  size={20} />
                <TextInput
                  placeholder="Enter Positive feedback"
                  placeholderTextColor="#666666"
                  autoCorrect={false}
                  style={[
                    styles.textInput,
                    {
                      color: 'black',
                    },
                  ]}
                  onChangeText={good=>this.setState({good})}
                />
              </View>
           
             
              <View style={styles.action}>
                <FontAwesome name="envelope-o" size={20} />
                <TextInput
                  placeholder="Any suggestions"
                  placeholderTextColor="#666666"
                  keyboardType="email-address"
                  autoCorrect={false}
                  style={[
                    styles.textInput,
                    {
                        color: 'black',
                    },
                  ]}
                  onChangeText={opinion=>this.setState({opinion})}
                />
              </View>
              <View style={styles.action}>
              <Icon name="home-outline"  size={25} />
                <TextInput
                  placeholder="Enter Job role "
                  placeholderTextColor="#666666"
                  autoCorrect={false}
                  style={[
                    styles.textInput,
                    {
                        color: 'black',
                    },
                  ]}
                  editable = {false}
                  value={this.state.department}
                />
              </View>
              <View style={styles.action}>
              <FontAwesome name="users"  size={20} />
                <TextInput
                  placeholder="Refered by"
                  placeholderTextColor="#666666"
                  autoCorrect={false}
                  style={[
                    styles.textInput,
                    {
                        color: 'black',
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
          </DismissKeyboard>
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
          padding: 20,
          backgroundColor: '#FFFFFF',
          paddingTop: 20,
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
          // shadowColor: '#000000',
          // shadowOffset: {width: 0, height: 0},
          // shadowRadius: 5,
          // shadowOpacity: 0.4,
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
          marginTop: 20,
          marginBottom: 20,
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
        header2: {
        
          width:'100%',
          height:50,
          top:0,
        
          justifyContent:'center',
        },
      });