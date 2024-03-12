import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, Button, ScrollView} from 'react-native'
import React, {useContext} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FIREBASE_AUTH } from '../firebaseConfiguration';
import { ChangeDarkMode } from '../Context/themeProvider';



const Profile = ({navigation}) => {

  const {darkMode, HandleMode} = useContext(ChangeDarkMode)

  const handleOpenDrawer =()=>{
    navigation.openDrawer()
  
  }

  const handleLogout= async() =>{
    await FIREBASE_AUTH.signOut();
    navigation.navigate('Screen4login')
  }
  return (
    <ScrollView style={{backgroundColor:darkMode?"white":"#26282C", height:"100%", width:"100%"}}>
      <Text onPress={() => navigation.navigate('List')}></Text>
      <View style={{height: 10}}></View>
      <View>
        <TouchableOpacity onPress={handleOpenDrawer}>
        <Text style={{color: darkMode?"#26282C":"white", marginLeft: 20}} >More</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>{HandleMode()}}>
      <Text style={{color:'black', marginLeft: 20}}>photo</Text>
      </TouchableOpacity>
      <View>
        <View>
          <Image source={require('../assets/me.jpeg')} style={{width: 150, height: 150, alignSelf: 'center', marginTop: 10, borderRadius: 100}}/>
        </View>
        <View>
          <Text style={{color:darkMode?"#26282C":"white", alignSelf: 'center', marginTop: 20}}>Berissa Muyizere</Text>
          <Text style={{color: '#858481', alignSelf: 'center',}}> m.berissa@gmail.com</Text>
        </View>
        <View style={{flexDirection:'row' , marginLeft: 150}}>
          <Feather name={'edit'} size={20} color='orange' alignSelf='center' marginLeft/>
          <Text>Edit</Text>
        </View>

      </View>
      <View style={{marginLeft:20}}>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <AntDesign name={'inbox'} size={20} color={darkMode?"#26282C":"white"}/>
          <Text style={{color: darkMode?"#26282C":"white", marginLeft: 10}}> Inbox</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20, }}>
          <MaterialCommunityIcons name={'account-outline'} size={20} color={darkMode?"#26282C":"white"}/>
          <Text style={{color: darkMode?"#26282C":"white", marginLeft: 10}}> Account Settings</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <AntDesign name={'setting'} size={20} color={darkMode?"#26282C":"white"}/>
          <Text style={{color: darkMode?"#26282C":"white", marginLeft: 10}}>App settings</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Feather name={'dribbble'} size={20} color={darkMode?"#26282C":"white"}/>
          <Text style={{color: darkMode?"#26282C":"white", marginLeft: 10}}>Language</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Feather name={'alert-circle'} size={20} color={darkMode?"#26282C":"white"}/>
          <Text style={{color: darkMode?"#26282C":"white", marginLeft: 10}}>Help</Text> 
        </View>
        <View style={{height: 30}} ></View>
        <View>
          <Text style={{color:'#434548'}}> Terms & Conditions</Text>
          <Text style={{color:'#434548'}}> Privacy & Policy</Text>
        </View>
      </View>
      <View style={{height:3}}/>
      <Button title="Logout"  onPress= {handleLogout}/>
    </ScrollView>
  )
}

export default Profile

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: darkMode?"white":'#26282C',
//     width: '100%',
//     height: '100%',
    
//   }
// })