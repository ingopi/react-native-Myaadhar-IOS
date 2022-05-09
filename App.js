
import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';

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
import AgencyLogin from './screens/AgencyLogin';
import BusinessCard from './screens/BusinessCard';
import FeedBackScreen from './screens/FeedBackScreen';
import Wallet from './screens/Wallet';
import Notifications from './screens/Notifications';
import ReferralPage from './screens/ReferralPage';
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

  // const [connectStatus, setConnectStatus] = useState(false)
  // checkConnected().then(res => {
  //   setConnectStatus(res)
  // })
  return (

  
    <NavigationContainer>
  
  <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}  screenOptions={{swipeEnabled: false}} 
    drawerStyle={{backgroundColor:'transparent'}}
  >

  <Drawer.Screen name="Home" component={Root} />
  <Drawer.Screen name="AgencyLogin" component={AgencyLogin} options={{swipeEnabled:true}}/>
  <Drawer.Screen name="Profile" component={Profile}options={{swipeEnabled:true}} />
   <Drawer.Screen name="CrmScreen" component={CrmScreen}options={{swipeEnabled:true}} />
   <Drawer.Screen name="SaphireScreen" component={SaphireScreen}options={{swipeEnabled:true}} />
   <Drawer.Screen name="LoanScreen" component={LoanScreen}options={{swipeEnabled:true}} />
   <Drawer.Screen name="ReferralPage" component={ReferralPage} options={{swipeEnabled:true}}/>
   <Drawer.Screen name="ScanYourAsset" component={ScanYourAsset}options={{swipeEnabled:true}} />
   <Drawer.Screen name="ViewImageScreen" component={ViewImageScreen}options={{swipeEnabled:true}} />
   <Drawer.Screen name="Workline" component={Workline}options={{swipeEnabled:true}} />
   <Drawer.Screen name="PasswordReset" component={PasswordReset}options={{swipeEnabled:true}} />
   <Drawer.Screen name="BusinessCard" component={BusinessCard}options={{swipeEnabled:true}} />
   <Drawer.Screen name="Wallet" component={Wallet}options={{swipeEnabled:true}} />
   <Drawer.Screen name="Notifications" component={Notifications}options={{swipeEnabled:true}} />
   <Drawer.Screen name="FeedBackScreen" component={FeedBackScreen}options={{swipeEnabled:true}} />
   <Drawer.Screen name="HomePage" component={HomePage} options={{swipeEnabled:true}}/>
  
 </Drawer.Navigator>

   
   
  </NavigationContainer>


);
  }