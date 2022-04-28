import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Wallet = () => {
  return (
    <View style={styles.container}>
    
      <Text style={styles.text}>Wallet under Maintainance</Text>
   
  </View>
  )
}

export default Wallet

const styles = StyleSheet.create({
    container: {
       height:'100%'
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
