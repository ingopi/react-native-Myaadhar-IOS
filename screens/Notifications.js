import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Notifications = () => {
  return (
    <SafeAreaView style={styles.container}>
    
       <View style={{ alignItems: 'center',
    justifyContent: 'center',}}>
  <LottieView source={require('../assets/waiting.json')} style={{height:200,width:200,alignContent:'center'}} autoPlay loop />
   </View>
   
  </SafeAreaView>
  )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignContent:'center',
      justifyContent:'center'
      },
      text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent:'center',
        backgroundColor: "#000000c0"
        
      }
    });
