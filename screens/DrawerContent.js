import { StyleSheet,View ,Image} from 'react-native'
import React from 'react'
import {
   
    Drawer,
   

} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BlurView} from "@react-native-community/blur";

import RadialGradient from 'react-native-radial-gradient';
export function DrawerContent(props) {

  const loggedOut = () =>{
    
     
    AsyncStorage.removeItem('MainData');
    props.navigation.navigate('SignInScreen');

  }
  return (
    
    <RadialGradient style={{flex:1}}
    colors={['rgba(255,255,255,0.6)','rgba(255,255,255,0.5)','rgba(255,255,255,0.5)','rgba(255,255,255,0.5)']}
  
    center={[100,100]}
    radius={600}>
       <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={50}
          reducedTransparencyFallbackColor="white"
        />
       
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
          


            <View style={{flexDirection:'row',marginTop: 20,justifyContent: 'center',
        alignItems: 'center',}}>
                            <Image 
                            style={{height:100,width:220}}
                                 source={require('../assets/logo.png')}
                               
                            />
                          
                        </View>
            <Drawer.Section style={styles.drawerSection}>
            <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline"
                                color="#00237D"
                                size={size}
                                />
                            )}

                            label="HOME"
                            onPress={() => {props.navigation.navigate('HomePage')}}
                        />
            <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="person-outline"
                                color="#00237D"
                                size={size}
                                />
                            )}

                            label="PROFILE"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />

                      
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="scan-outline"
                                color="#00237D"
                                size={size}
                                />
                            )}
                            label="UPLOAD ASSETS"
                            onPress={() => {props.navigation.navigate('ScanYourAsset')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="chatbubble-ellipses-outline"
                                color="#00237D"
                                size={size}
                                />
                            )}
                            label="CRM"
                            onPress={() => {props.navigation.navigate('CrmScreen')}}
                        />
                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                               name="finger-print-outline"
                               color="#00237D"
                                size={size}
                                />
                            )}
                            label="IT HELPDESK"
                            onPress={() => {props.navigation.navigate('SaphireScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="body-outline" 
                                color="#00237D"
                                size={size}
                                />
                            )}
                            label="REFFER JOB"
                            onPress={() => {props.navigation.navigate('ReferralPage')}}
                        />

                          <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="add-outline" 
                                color="#00237D"
                                size={size}
                                />
                            )}
                            label="WORKLINE"
                            onPress={() => {props.navigation.navigate('Workline')}}
                        />

                           <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="key-outline" 
                                color="#00237D"
                                size={size}
                                />
                            )}
                            label="PASSWORD RESET"
                            onPress={() => {props.navigation.navigate('PasswordReset')}}
                        />

<DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="card-outline" 
                                color="#00237D"
                                size={size}
                                />
                            )}
                          
                           
                            label="BUSINESS CARD"
                        onPress={() => {props.navigation.navigate('BusinessCard')}}
                        />
                      
                    </Drawer.Section>
                
                  
                </View>
         

        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
            icon={({color,size}) => (
              <Icon 
              name="log-out-outline"
              color="#00237D"
              size={size}
              />
              )} 
            label="SIGN OUT"
            onPress={loggedOut}
            />
            </Drawer.Section>
            </RadialGradient>
 
  );
}



const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    absolute: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }
  });
