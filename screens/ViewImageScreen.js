import { StyleSheet, Text, View, TouchableOpacity,Image,TextInput } from 'react-native'
import React,  { Component }from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';

import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

export default class ViewImageScreen extends Component {


  
  constructor(props)
  {
      super(props);
      this.state={path:'',date:'',serialno:'',assetid:''};
  }


    
  render() {
  
    const { navigation } = this.props;
    const path = this.props.route.params.path;
    const date = this.props.route.params.date;
    const serialno = this.props.route.params.serialno;
    const assetid = this.props.route.params.assetid;


    console.log('Inside ViewimageScreen',path);
  
    

  
  
  
  
   
    return (

<View style={{flex:1, justifyContent:'center'}}>
      <Text style={styles.textofimage}>You have uploaded your Asset on {'\n'}{date}
      </Text>
    <Image source={{uri : path}} style={{height:'50%',width:'100%'}}></Image>





<View style={{  paddingLeft:20,
    paddingRight:20,}}>
    <Text style={styles.label}>Serial No</Text>
 <View style={styles.input}>
 <Icon name="laptop-outline" color="#374b92"size={20} />
 <TextInput
  value={serialno}
 />
 </View>
 <Text style={styles.label}>Ahfl Asset ID</Text>
 <View style={styles.input}>
 <Icon name="laptop-outline" color="#374b92"size={20} />
 <TextInput
  value={assetid}
 />
 </View>
</View>
    </View>
    )
  }
}
const styles = StyleSheet.create({
 
  textofimage:{
    textAlign:'center',
    fontSize: 18, fontWeight: 'bold',
    color:'black',
    paddingBottom:20
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
  label:{
    marginVertical:7,
    fontSize:14,
    
  }
 
});