
import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReferralPage  from './screens/ReferralPage';
import CrmScreen from './screens/CrmScreen';
import SaphireScreen from './screens/SaphireScreen';
import HomePage from './screens/HomePage';
import LoanScreen from './screens/LoanScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootStackScreen from './screens/RootStackScreen';
import { DrawerContent } from './screens/DrawerContent';
import ScanYourAsset  from './screens/ScanYourAsset';
import Profile from './screens/Profile';
import PasswordReset from './screens/PasswordReset';
import Workline from './screens/Workline';
import ViewImageScreen from './screens/ViewImageScreen';
import SignInScreen from './screens/SignInScreen';
import SplashScreen from './screens/SplashScreen';
import AgencyLogin from './screens/AgencyLogin';
import BusinessCard from './screens/BusinessCard';
//import OtpScreen from './screens/OtpScreen';
// import Waste from './screens/Waste';
const Drawer = createDrawerNavigator();

function Root() {
  return (
   // <OtpScreen/>
<RootStackScreen/>
//<Waste/>
  );
}
 export default function App() {

  return (

  
    <NavigationContainer>
  
  <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}  
  drawerStyle={{backgroundColor:'transparent'}}
  >
  <Drawer.Screen name="Home" component={Root} />
  <Drawer.Screen name="AgencyLogin" component={AgencyLogin} />
  <Drawer.Screen name="Profile" component={Profile} />
   <Drawer.Screen name="CrmScreen" component={CrmScreen} />
   <Drawer.Screen name="SaphireScreen" component={SaphireScreen} />
   <Drawer.Screen name="LoanScreen" component={LoanScreen} />
   <Drawer.Screen name="ReferralPage" component={ReferralPage} />
   <Drawer.Screen name="ScanYourAsset" component={ScanYourAsset} />
   <Drawer.Screen name="ViewImageScreen" component={ViewImageScreen} />
   <Drawer.Screen name="Workline" component={Workline} />
   <Drawer.Screen name="PasswordReset" component={PasswordReset} />
   <Drawer.Screen name="BusinessCard" component={BusinessCard} />
   <Drawer.Screen name="HomePage" component={HomePage} />
   <Drawer.Screen name="SignInScreen" component={SignInScreen} />
   <Drawer.Screen name="SplashScreen" component={SplashScreen} />

 </Drawer.Navigator>

   
   
  </NavigationContainer>


);
  }