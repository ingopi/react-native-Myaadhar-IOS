
import React, {useEffect,Component} from 'react';
import {View,Text,SafeAreaView,TouchableOpacity,StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import CrmScreen from './screens/CrmScreen';
import LottieView from 'lottie-react-native';
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
import hgsScreen from './screens/hgsScreen';
import adminScreen from './screens/adminScreen';
import neoScreen from './screens/neoScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import { NetInfoCellularGeneration, useNetInfo } from '@react-native-community/netinfo';
// import Waste from './screens/Waste';
import NetInfo from "@react-native-community/netinfo";
const Drawer = createDrawerNavigator();

function Root() {
  return (
   // <OtpScreen/>
<RootStackScreen/>
//<Waste/>
  );
}

export default class App extends Component{
  constructor()
  {
    super();
    this.state={
      conn_status:"",
    }
    this.CheckInternet();
  }
  
  CheckInternet=async()=>{

    await NetInfo.fetch().then(state => {
      console.log("Connection type",state.type);
      console.log("Is connected?",state.isConnected);

      if(state.isConnected==true)
      {
        this.setState({
          conn_status:"online"
        })
      }
      else {
        this.setState({
          conn_status:"offline"
        })
      }
    })
   
  }

  componentDidMount() {
    this.interval = setInterval(() => this.CheckInternet(), 120);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render()
  {
   

   if(this.state.conn_status=="offline")
   {
    return (
      <SafeAreaView >
    <View style={styles.header}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon style={styles.icons} name="access-point-network-off"  size={30} />
                        <Text style={styles.welcome}>AHFL Connect</Text>
                    </View>
                </View>
      <View style={{ alignItems: 'center',
   justifyContent: 'center',marginTop:100}}>
   
 <LottieView source={require('./assets/disconnect.json')} style={{height:250,width:250,alignContent:'center'}} autoPlay loop />
 <TouchableOpacity style={
{
     marginTop:25,
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#6b85f4',
    alignItems: 'center',
    marginVertical: 7,
    width:100
 }

 } onPress={this.CheckInternet}>
      <Text style={{
         fontSize: 18,
         fontWeight: 'bold',
         color: 'white',
      }}>Retry</Text>
    </TouchableOpacity>
  </View>
  
 </SafeAreaView>
    );
  

   }else{





    return (

  
      <NavigationContainer>
    
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}  screenOptions={{swipeEnabled: false}} 
     drawerStyle={{backgroundColor:'transparent'}}
    >
  
    <Drawer.Screen name="Home" component={Root} />
    <Drawer.Screen name="AgencyLogin" component={AgencyLogin}/>
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
     <Drawer.Screen name="hgsScreen" component={hgsScreen} options={{swipeEnabled:true}}/>
     <Drawer.Screen name="adminScreen" component={adminScreen} options={{swipeEnabled:true}}/>
     <Drawer.Screen name="neoScreen" component={neoScreen} options={{swipeEnabled:true}}/>
     <Drawer.Screen name="HomePage" component={HomePage} options={{swipeEnabled:true}}/>
    
   </Drawer.Navigator>
  
     
     
    </NavigationContainer>
  
  
  );




 }


    
   }
 
  }

  const styles = StyleSheet.create({
  header: {
    paddingVertical: 15,
    backgroundColor: 'white',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
},
welcome: {
    fontSize: 24,
    fontWeight: 'bold',
   
},
icons: {
    marginHorizontal: 15,
  
},

});