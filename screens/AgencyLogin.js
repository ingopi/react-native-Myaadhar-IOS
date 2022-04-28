import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
const AgencyLogin = ({navigation}) => {
    return (
        <WebView
          source={{uri: 'https://uam.tcsindiasolutions.com/auth/realms/Aadhar/protocol/openid-connect/auth?client_id=Platform&redirect_uri=https%3A%2F%2Fwww.tcsindiasolutions.com%2F%23%2Fnbfc%2FAadhar-login&state=75679d06-f39d-4eca-a527-1c543906b400&response_mode=fragment&response_type=code&scope=openid&nonce=72f1b075-23ad-4d30-92b9-c340d57465bb'}}
          style={{marginTop: 20}}
        />
  )
}

export default AgencyLogin;

const styles = StyleSheet.create({})