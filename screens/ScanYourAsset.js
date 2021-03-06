import { StyleSheet, Text, View, TouchableOpacity,Image,TextInput ,Alert} from 'react-native'
import React,  { Component }from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import Storage from 'react-native-expire-storage';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DismissKeyboard from '../utils/DismissKeyboard';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class ScanYourAsset extends Component {


  
  constructor(props)
  {
      super(props);
      this.state={empId:'',path:'', assetID:'',serialNo:''};
  }

  static navigationOptions = ({navigation}) => {
    return {
        
headerLeft:(<HeaderBackButton size={20} onPress={()=>{navigation.navigate('Home')}}  color="#fff" tintColor="#fff"/>),
    headerStyle: {
      backgroundColor: 'rgb(0, 145, 234)',
  },
  headerTintColor: 'white',
  headerTitleStyle: 
  {
    fontWeight: 'bold',
    color:'white' ,
    //paddingTop:"2%",
  },  
    }
}

    
  render() {
  
    Storage.getItem('MainData')
    .then(res =>{
     if( res !== null){
     this.state.empId = JSON.parse(res).empId;
       const empId = this.state.empId;
      this.setState({
       
        empId:empId,
       
      })
    
  
     }
     else{
       console.log("something went wrong")
     }
    });
 
 
 





     
  const viewImage=()=>{
   
     const empId = this.state.empId;
     
     console.log("Employee ID",empId);
     

    var API="https://myadhp.aadharhousing.com/myaadhar/public/api/downloadAsset";
                 
  
     fetch(API, 
        {
            method:'POST',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "empcode":empId
              })
        }
        )
    
.then((response)=>response.json())
.then((response)=>
 {
  
      const path = response.path;
      const dateAndTime = response.uploadedDate;
      const serialno = response.serialNumber;
      const assetid = response.ahflAssetNumber;

      const date = dateAndTime.split(" ")[0];

      
       console.log("Date",date);

       this.props.navigation.navigate('ViewImageScreen',{   
          
        assetid:assetid,
        serialno:serialno,
        path:path,
        date:date
        
        });
  


 }

)
.catch((error)=>{
console.log(error)
alert("Error"+error);
})
}
     
    const takePhotoFromCamera = () => {


      if(this.state.assetID.length == 0 || this.state.serialNo.length == 0)
      {
         Alert.alert("Please fill required details","Required field is missinng");
      }
      else{
      ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
    
    }).then(image => {
      console.log(image);
      ImageUpload(image.path)
      
    });

    const ImageUpload = (imagePath) =>{
  
    const empId=this.state.empId;
    console.log("Employee ID",empId);
    
    
  const formdata = new FormData();
  formdata.append("fileName",{
    uri:imagePath,
    name: 'image.jpg',
    data: 'image',
    type: 'image/jpg'  
    
  }
  );
  
  
  
  formdata.append("empId",empId);
  formdata.append("serialNumber",this.state.serialNo);
  formdata.append("ahflAssetNumber",this.state.assetID);

  var requestOptions = {
    method: 'POST',
    body: formdata
    
  
  };
  
  
  
  fetch("https://myadhp.aadharhousing.com/myaadhar/public/api/multiple-image-upload", requestOptions)
    .then(response => response.text())
    .then(result => Alert.alert("Successfully uploaded","Thank you for the submission"))
    .catch(error => Alert.alert("Oops!","Something went wrong"));
    }
  
  
  
  }
 
}
  
  const choosePhotoFromLibrary = () => {

    if(this.state.assetID.length == 0 || this.state.serialNo.length == 0)
    {
       Alert.alert("Please fill required details","Required field is missinng");
    }
    else{
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
     // compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
     // setImage(image.path);
     // this.bs.current.snapTo(1);
     
     ImageUpload(image.path)
    });
  
    
  
  
    const ImageUpload = (imagePath) =>{
    
      const empId=this.state.empId;
    console.log("Employee ID",empId);
    
   
      this.state.empId=empId;
  
    
    
  const formdata = new FormData();
  formdata.append("fileName",{
    uri:imagePath,
    name: 'image.jpg',
    data: 'image',
    type: 'image/jpg'  
    
  }
  );
  
  
  
  
  formdata.append("empId",empId);
  formdata.append("serialNumber",this.state.serialNo);
  formdata.append("ahflAssetNumber",this.state.assetID);

  var requestOptions = {
    method: 'POST',
    body: formdata
    
  
  };
  
  
  
  fetch("https://myadhp.aadharhousing.com/myaadhar/public/api/multiple-image-upload", requestOptions)
    .then(response => response.text())
    .then(result => Alert.alert("Successfully uploaded","Thank you for the submission"))
    .catch(error => Alert.alert("Oops!","Something went wrong"));
    }
  
  
  
  }
 
}
   
    return (
<DismissKeyboard>
      <SafeAreaView style={styles.panel}>
        
         
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomePage')}>
            <Icon name="chevron-left" color="black" size={35}/>
            <Text style={{paddingLeft:30,fontWeight:'bold',color:'#00237D',fontSize:20,position:'absolute',marginTop:5}}>Back</Text> 
            </TouchableOpacity>
      <TouchableOpacity 
  style={{alignItems:'center',}}>
   <View style={{ alignItems: 'center',
    justifyContent: 'center',}}>
  <LottieView source={require('../assets/upload.json')} style={{height:200,width:200,alignContent:'center'}} autoPlay loop />
   </View>
   <View style={{alignItems: 'center'}}>
      <Text style={styles.panelTitle}>Upload your Asset</Text>
      <Text style={styles.panelSubtitle}>Choose Your Picture</Text>
    </View>
   </TouchableOpacity>
  <Text style={{textAlign:'center'}}>Please enter Serial no and Asset Id first then upload your asset</Text>

<View style={{paddingBottom:30}} >

 <Text style={styles.label}>Serial no<Text style={{color:'red'}}> *</Text></Text>
<View style={styles.action}>


                                <TextInput
                                style={styles.input}
 
 placeholder='Enter your Serial No'
 autoCapitalize="none"
 onChangeText={serialNo=>this.setState({serialNo})}
 
 
 
 />


</View>


<Text style={styles.label}>Asset Id<Text style={{color:'red'}}> *</Text></Text>
<View >


 <TextInput
 style={styles.input}
 placeholder='Enter your Asset ID'
 autoCapitalize="none"
 onChangeText={assetID=>this.setState({assetID})}
 
 
 
 />

</View>





  </View>








    <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
      <Text style={styles.panelButtonTitle}>Take Photo</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
      <Text style={styles.panelButtonTitle}>Choose From Library</Text>
    </TouchableOpacity>
     {/* <TouchableOpacity style={styles.panelButton}  onPress={viewImage}>
      <Text style={styles.panelButtonTitle}>View Existing uploads</Text>
    </TouchableOpacity>    */}
  </SafeAreaView>
  </DismissKeyboard>
  )
}




}

const styles = StyleSheet.create({
 
  panel: {
    bottom:0,
    padding: 20,
    flex:100,
    left: 0,
    right: 0,
    
   
   
   
    
   
  },
  images:{
  height:200,
  width:200,
 
 
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
    backgroundColor: '#6b85f4',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  input:{
    height:55,
    backgroundColor:'#D3D3D3',
    flexDirection:'row',
    paddingHorizontal:15,
    width:'100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius:20,
    alignItems:'center'
  },
  label:{
    marginVertical:7,
    fontSize:14,
    
  },
  header2: {
     
    width:'100%',
   

  
    justifyContent:'center',
  },
  
 
 
});