
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React,  { Component }from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { WebView } from 'react-native-webview';
import Loader from '../utils/Loader';
import { SafeAreaView } from 'react-native-safe-area-context';
export default class Workline extends Component {


  
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
      source={{uri: 'https://app13.workline.hr'}}
      style={{marginTop: 20}}
     
    />
 </SafeAreaView>
    )
  
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