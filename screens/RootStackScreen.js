
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import OtpScreen from './OtpScreen';
import AgencyLogin from './AgencyLogin';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
       <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="OtpScreen" component={OtpScreen}/>
        <RootStack.Screen name="AgencyLogin" component={AgencyLogin}/>
       
    </RootStack.Navigator>

  
);

export default RootStackScreen;