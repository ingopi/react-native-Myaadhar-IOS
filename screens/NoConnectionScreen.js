import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
const NoConnectionScreen = () => {
  return (
    <View style={styles.container}>
     <LottieView source={require('../assets/nointernet.json')} autoPlay Loop />;
    </View>
  )
}

export default NoConnectionScreen

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    }
})