import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
const LoanScreen = ({navigation}) => {
    return (
        <WebView
          source={{uri: 'https://aadharhousing.com/apply-for-loan.php'}}
          style={{marginTop: 20}}
        />
  )
}

export default LoanScreen

const styles = StyleSheet.create({})