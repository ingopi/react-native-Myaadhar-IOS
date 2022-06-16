import { StyleSheet, Text, View, TouchableOpacity,Dimensions,Image,ScrollView ,SafeAreaView, BackHandler} from 'react-native'
import React, { Component , useState} from 'react'
import { SliderBox } from "react-native-image-slider-box";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from 'react-native-expire-storage';
export default class HomePage extends Component {

 

  constructor(props)
  {
      super(props);
    
      this.state={employeeName:'',
      images: [
        require('../assets/assets1.jpg'),
        require('../assets/assets2.jpg'),
        require('../assets/assets3.jpg'),
        require('../assets/assets4.jpg'),
      ]
    };
  }


  


  render() {
    
   

    const { navigation } = this.props;
    
    Storage.getItem('MainData')
    .then(res =>{
     if( res !== null){

   //Getting data from local storage
      this.state.employeeName = JSON.parse(res).employeeName;
   
   //setting into variable 
       const employeeName = this.state.employeeName;
     
   //setting into state
      this.setState({
        employeeName:employeeName,
       
      })
    
  
     }
     else{
       console.log("something went wrong")
     }
    });
     
   
    

   let firstName = this.state.employeeName.split(" ")[0];



     
    return (

      <SafeAreaView>
       
        <View style={styles.header}>
          {/* <Text style={styles.text_header}>Hello {} 👋 </Text>
          <Text style={styles.text_header}>Lets store your asset info</Text> */}
         
         <Icon style={styles.menu} name="menu" color="white" size={35}

         onPress={() => {navigation.openDrawer()}}
         />
         <View style={styles.both}>
  <Icon style={styles.notification} name="ios-notifications-outline" color="white" size={25}
  onPress={()=>navigation.navigate('Notifications')} 
  />
  <Icon style={styles.wallet} name="ios-wallet-outline" color="white" size={25}
  onPress={()=>navigation.navigate('Wallet')}
  
  />
         </View>
        </View>

          <ScrollView>

            <View>
              <Text style={{paddingLeft:22,paddingBottom:10,paddingTop:10}}>
                Hello 👋{'\n'}
               <Text style={styles.maintitle}>{firstName}</Text> 
             
              </Text>
  
              <View style={styles.both2}>
              <TouchableOpacity style={styles.commandButton} onPress={()=>navigation.navigate('FeedBackScreen')}>
                <Text style={styles.panelButtonTitle}>Give Feedback</Text>
              </TouchableOpacity>
                </View>
            
             
            </View>
          
          <View style={styles.MainContainer}>

          <SliderBox
          images={this.state.images}
          autoplay
          circleLoop
          ImageComponentStyle={{borderRadius: 15, width: '94%', marginTop: 5}}
          resizeMethod={'resize'}
          resizeMode={'cover'}
          paginationBoxStyle={{
            position: "absolute",
            
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10
          }}
         
        />



          <View style={styles.container}>



          <View style={styles.main}>
                 
                 <TouchableOpacity onPress={()=>navigation.navigate('Workline')}>
    
                  <Image 
                  style={styles.images}
                  source={require('../assets/workline.png')}
           
              />
              <Text  style={styles.textofimage}>Workline</Text>
              
                 </TouchableOpacity>
      
                 <TouchableOpacity onPress={()=>navigation.navigate('neoScreen')}>
    
    <Image 
    style={styles.images}
    
    source={require('../assets/neo.png')}
    
    />
    <Text style={styles.textofimage}>Aadhar Neo</Text>
       </TouchableOpacity>

                
    
    
    
    
                 </View>
                 


             <View  style={styles.main}>
             
             <TouchableOpacity  onPress={()=>navigation.navigate('BusinessCard')}>
              
              <Image 
              style={styles.images}
              source={require('../assets/business.png')}
           
              />
              <Text  style={styles.textofimage}>Business{'\n'}card</Text>
              
                 </TouchableOpacity>

                 <TouchableOpacity  onPress={()=>navigation.navigate('ScanYourAsset')}>
              
              <Image 
              style={styles.images}
              source={require('../assets/scan.png')}
           
              />
              <Text  style={styles.textofimage}>Upload asset</Text>
              
                 </TouchableOpacity>
    
           
           
   
              




             </View>
          




             <View  style={styles.main}>
                 
             <TouchableOpacity onPress={()=>navigation.navigate('CrmScreen')}>

<Image 
style={styles.images}

source={require('../assets/crmupdated.png')}

/>
<Text style={styles.textofimage}>CRM</Text>
   </TouchableOpacity>
    
            
  
    
                 <TouchableOpacity  onPress={()=>navigation.navigate('PasswordReset')}>
    
    <Image 
    style={styles.images}
    
    source={require('../assets/reset.png')}
    
    />
    <Text style={styles.textofimage}>Reset</Text>
       </TouchableOpacity>
  
    
    
                 </View>
                 






                 <View  style={styles.main}>
                 
                 <TouchableOpacity onPress={()=>navigation.navigate('hgsScreen')}>
    
    <Image 
    style={styles.images}
    
    source={require('../assets/hsg.png')}
    
    />
    <Text style={styles.textofimage}>HGS</Text>
       </TouchableOpacity>
        
                
       <TouchableOpacity  onPress={()=>navigation.navigate('adminScreen')}>
                  
                  <Image 
                  style={styles.images}
                  source={require('../assets/admin.png')}
               
                  />
                  <Text  style={styles.textofimage}>Admin 4 u</Text>
                  
                     </TouchableOpacity>
        
        
        
        
                     </View>
                     

                
             <View  style={styles.main}>
                 
             
    
       <TouchableOpacity onPress={()=>navigation.navigate('SaphireScreen')}>
    
    <Image 
    style={styles.images}
    source={require('../assets/saphire.png')}

/>
<Text  style={styles.textofimage}>IT Hepdesk</Text>

   </TouchableOpacity>

        
        
                     </View>
                     

        </View>
      
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: 
{
 
height: '100%',
width:'100%',
 
// Set hex color code here.
backgroundColor: '#e7e7e7',
//backgroundColor:'blue'

 
},
  container:{
    marginLeft:15 , 
    marginRight:15,
    marginTop:15,
    marginBottom:70,
   paddingBottom:10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor:"white",
    borderBottomRightRadius:30,
    borderBottomLeftRadius: 30,
   
    
  },
both:{
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignSelf: 'flex-end',
},
both2:{
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignSelf: 'flex-end',
  position:'absolute',
  paddingTop:15,
  paddingRight:25
},

main:{


  flexDirection:'row',  
  justifyContent: 'space-between', 
  paddingLeft:40 , 
  paddingRight:40,
  paddingTop:20,
  paddingBottom:20,
 
},

  textStyle:{
    textAlign:'left',
    justifyContent:'center',
   color:'grey',
   fontSize:12,
  },
  text_header:{
  
    textAlign:'left',
    paddingLeft:20,
    color:'white',

  },
  menu:{
    alignSelf: 'flex-start',
    position:'absolute',
    paddingLeft:20
  },
 
  wallet:{
    marginTop:10,
    marginRight:20,
    marginLeft:20,
    flexDirection: 'row',



  },
  notification:{
   
    marginTop:10,
    marginRight:20,
    marginLeft:20,
  },
  textofimage:{
     textAlign:'center',
     fontSize: 18, fontWeight: 'bold',
     color:'black'
    
  },
  maintitle:{
    fontSize: 18, fontWeight: 'bold'
  },
  images:{
   
   width:110,
   height:110
  },
insidecontent:{
  paddingLeft:10
},
  footer:{
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  commandButton: {
    padding: 5,
    paddingHorizontal:20,
    borderRadius: 10,
    backgroundColor: '#374b92',
    alignItems: 'center',
   
  },
  panelButton: {
    
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
   
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  content:{
    
    backgroundColor: '#fff',
    paddingTop:40,
    paddingLeft:30,
    paddingRight:30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal:20,
    paddingVertical: 30,
    
    justifyContent:'center',
  }, 
  header: {
    backgroundColor:'#00237D',
    width:'100%',
    height:50,
    top:0,
  
    justifyContent:'center',
  },

});