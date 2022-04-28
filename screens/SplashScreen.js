import React ,{Component}from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    ImageBackground,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';

 

export default class SplashScreen extends Component {


    
  render() {
    
  const viewImage=()=>{
    AsyncStorage.getItem('MainData')
    .then(res =>{
     if( res !== null){
    
     this.props.navigation.navigate('HomePage');
     }
     else{
     this.props.navigation.navigate('SignInScreen');
     }
    });
 
}
     
  
   
    return (

      <View style={styles.container}>
      <ImageBackground source={require('../assets/homepage.jpg')} resizeMode="cover" style={styles.image}>
      <View style={styles.header}>
      <Animatable.Image  resizeMode="contain"
                  animation="bounceIn"
                  duraton="2000"
              source={require('../assets/logo.png')}
              style={styles.logo}
           
              />
              </View>
          <View style={styles.panel}>
              <TouchableOpacity style={styles.panelButton} onPress={viewImage}>
        <Text style={styles.panelButtonTitle}>Login as AHFL user</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}  onPress={()=>this.props.navigation.navigate('AgencyLogin')} >
        <Text style={styles.panelButtonTitle}>Agency Login</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground>
  
     
    </View>


  )
}




}

const {height} = Dimensions.get("screen");

const height_logo = height * 0.15;
const styles = StyleSheet.create({
    panel: {
        bottom:0,
        padding: 20,
     
        paddingTop: 20,
        position: 'absolute',
        flex:100,
        left: 0,
        right: 0, 
       
      },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  header: {
    flex: 2, 
      justifyContent: 'center',
      alignItems: 'center'
  },
  logo: {
    alignItems:'center',
    
    width: 250,
    height: height_logo,
},
panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#00237D',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
