import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity,Dimensions,Image,Pressable, ScrollView} from 'react-native';
const height=Dimensions.get('screen').height;
import AntDesign from 'react-native-vector-icons/AntDesign';
//import { Icon } from "react-native-elements";
import { TextInput,Checkbox,Icon} from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useState} from 'react';
import { Input } from './Input';
import { FIREBASE_AUTH } from './firebaseconfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import FlashMessage from "react-native-flash-message";

import { showMessage, hideMessage } from "react-native-flash-message";

export default function Signup({navigation}) 
{

const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[emailError,setEmailError]=useState('')
const[passwordError,setPasswordError]=useState('')

const auth = FIREBASE_AUTH

const validateForm=()=>{
  let valid =true
//validate email
if (!email.trim()) {
  setEmailError('Email is required')
  valid = false
} else if (!isValidEmail(email)) {
  setEmailError('Invalid email format')
  valid = false
} else {
  setEmailError('')
}
   // Validate password
   if (!password.trim()) {
    setPasswordError('Password is required')
    valid = false
} else {
    setPasswordError('')
}

return valid
}
const handleSubmit = async () => {
  if (validateForm()) {

    const data = {
      email:email,
      password:password
    }
    console.log(email)
    console.log(password)

      // // Perform form submission
      // navigation.navigate("signin")
      // console.log('Form submitted:', email, password)

try{
  const response = await createUserWithEmailAndPassword(auth,email,password)
  
  console.log(response)
  console.log('you are now signUp')
  navigation.navigate('signin')
}

catch(error){
  console.log(error)
  showMessage({
    message:error.code.toString(),
    type:"danger",
    icon:"danger"
   }) 
  

}

  }
}
const isValidEmail = (email) => {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}



return(
<View>
<FlashMessage position="top" />
<View style={{backgroundColor:"#1f2123",paddingLeft:50,paddingBottom:20,display:'flex',flexDirection:'row',gap:25}}>

</View>
<View style={{backgroundColor:'#26282c',display:'flex',paddingTop:30,height:700,paddingLeft:30}}>
    
    <View style={{paddingTop:2}}>
    <Text style={{color:'#9d9fa3'}}>Email Address</Text>
  <Input 
  
  placeholder={'ikellen2016@gmail.com'}
  mode={'outlined'}
  IconName='email-outline'
  background={'#26282c'}
  value={email}
  onChangeText={setEmail}
  error={!!emailError}

  />
 {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

   <Text style={{color:'#9d9fa3'}}>Phone Number</Text>
  <Input
  
  placeholder={'0888845555999'}
  
  mode={'outlined'}
  background={'#26282c'}
  IconName={'phone-outline'}
/>
  <Text style={{color:'#9d9fa3'}}>Birth Date</Text>
  <Input 
  
  placeholder={'10/12/1995'}
  mode={'outlined'}
  IconName='calendar-blank-outline'
  background={'#26282c'}

  />
   <Text style={{color:'#9d9fa3'}}>Gender</Text>
  <Input
  
  placeholder={'Female'}
  
  mode={'outlined'}
  background={'#26282c'}
  IconName={'account-outline'}
  
  
  />
  <Text style={{color:'#9d9fa3'}}>Password</Text>
   <Input
   
  placeholder={'Your Password'}
  secureTextEntry={true}
  mode={'outlined'}
  background={'#26282c'}
  IconName={'lock-outline'}
  value={password}
  onChangeText={setPassword}
  error={!!passwordError}
  />
  {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

  <Text style={{color:'#9d9fa3'}}>Password</Text>
   <Input
   
  placeholder={'Your Password'}
  secureTextEntry={true}
  mode={'outlined'}
  background={'#26282c'}
  IconName={'lock-outline'}
  value={password}
  onChangeText={setPassword}
  error={!!passwordError}
  
  />
{passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

  <View style={{}}> 
      <TouchableOpacity style={{backgroundColor:'yellow',borderRadius:10,width:350}}   onPress={handleSubmit}>
        <Text style={{padding:4,textAlign:'center',fontWeight:'bold',fontSize:20}}>Sign Up</Text>
        </TouchableOpacity>
</View>
<View style={{paddingTop:5}}>
<Text style={{color:'white',fontWeight:'bold',fontSize:13}}>By Signing Up I accept 
 <Text style={{color:'yellow'}}>terms Of use</Text> And<Text style={{color:'yellow'}}>Privacy Police</Text> </Text>
  </View>
  <View><Text style={{paddingTop:20,textAlign:'center',color:'#9d9fa3',fontWeight:'bold',fontSize:20}}>or sign Up with</Text>
</View>

<View style={{paddingRight:30}}>
     <TouchableOpacity style={{ display:'flex', flexDirection:'row' ,padding:5, borderWidth: 1,marginBottom:10,justifyContent:'center',gap:10,borderColor:'gray'}}>
      <AntDesign name="google" size={20} color="red" style={{}} />
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15,color:'#9d9fa3'}}>Google</Text>
        </TouchableOpacity>
        
      <TouchableOpacity style={{display:'flex', flexDirection:'row' ,padding:5, borderWidth: 1, gap: 10,justifyContent:'center',marginBottom:20,borderColor:'gray'}}>
         <AntDesign name="link" size={20} color="white" style={{}} />
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15,color:'#9d9fa3'}}>Watch Movie</Text>
        </TouchableOpacity>

</View> 
 </View>
 </View>
 </View>
)}


const styles=StyleSheet.create(
  {
    error: {
      color: 'red',
      fontSize: 14,
      marginTop: 5
    }

  }
)
