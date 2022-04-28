
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
       <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="OtpScreen" component={OtpScreen}/>
        <RootStack.Screen name="AgencyLogin" component={AgencyLogin}/>
        <RootStack.Screen name="HomePage" component={HomePage}/>
        <RootStack.Screen name="FeedBackScreen" component={FeedBackScreen}/>
        <RootStack.Screen name="Notifications" component={Notifications}/>
        <RootStack.Screen name="Wallet" component={Wallet}/>
        <RootStack.Screen name="CrmScreen" component={CrmScreen}/>
        <RootStack.Screen name="LoanScreen" component={LoanScreen}/>
        <RootStack.Screen name="SaphireScreen" component={SaphireScreen}/>
        <RootStack.Screen name="BusinessCard" component={BusinessCard}/>
        <RootStack.Screen name="PasswordReset" component={PasswordReset}/>
        <RootStack.Screen name="Workline" component={Workline}/>
        <RootStack.Screen name="ReferralPage" component={ReferralPage}/>
        <RootStack.Screen name="ScanYourAsset" component={ScanYourAsset}/>
        
        <RootStack.Screen name="ViewImageScreen" component={ViewImageScreen}/>
    </RootStack.Navigator>

    // <RootStack.Navigator headerMode='none'>
    // <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
    // <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
    // </RootStack.Navigator>
);

export default RootStackScreen;
