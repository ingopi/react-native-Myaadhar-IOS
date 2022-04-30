
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import ReferralPage from './ReferralPage';
import HomePage from './HomePage';
import CrmScreen from './CrmScreen';
import SaphireScreen from './SaphireScreen';
import LoanScreen from './LoanScreen';
import ScanYourAsset from './ScanYourAsset';
import ViewImageScreen from './ViewImageScreen';
import AgencyLogin from './AgencyLogin';
import Wallet from './Wallet';
import Notifications from './Notifications';
import PasswordReset from './PasswordReset';
import Workline from './Workline';
import BusinessCard from './BusinessCard';
import FeedBackScreen from './FeedBackScreen';
import OtpScreen from './OtpScreen';


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
       <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="OtpScreen" component={OtpScreen}/>

    </RootStack.Navigator>

  
);

export default RootStackScreen;