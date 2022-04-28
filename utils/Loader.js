import { StyleSheet, Text, View , Modal , ActivityIndicator} from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
const Loader = (props) => {

    const {loading} = props;

  return (
   <Modal transparent={true} animationType={'none'} visible={loading}>
       <View style={styles.modalBackground}>
           <View style={styles.activityIndic}>
    
        <LottieView
        source={require('../assets/loader.json')}
        autoPlay
   loop        
        />


           </View>
    
       </View>
       </Modal>
  );
};

export default Loader

const styles = StyleSheet.create({

    modalBackground:{
        flex:1,
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'space-around',
        backgroundColor:'#00000040',
    },
    activityIndic:{
        backgroundColor:'#FFFFFF',
        height:100,
        width:100,
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
    }



})
