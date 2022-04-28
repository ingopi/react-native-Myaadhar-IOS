import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notifications = () => {
  return (
    <View style={styles.container}>
    
      <Text style={styles.text}>Notifications under Maintainance</Text>
   
  </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
      flex:4
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
