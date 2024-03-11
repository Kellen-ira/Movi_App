import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity,Dimensions,Image,Pressable, ScrollView} from 'react-native';
const height=Dimensions.get('screen').height;
import AntDesign from 'react-native-vector-icons/AntDesign';
//import { Icon } from "react-native-elements";
import { TextInput,Checkbox,Icon, Button} from "react-native-paper";
import React,{useState} from 'react';
import { Input } from './Input';
import { FIREBASE_AUTH } from './firebaseconfig';
import FlashMessage from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { showMessage, hideMessage } from "react-native-flash-message";

export default function Sign({navigation}) 
{

const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[emailError,setEmailError]=useState('')
const[passwordError,setPasswordError]=useState('')


const auth = FIREBASE_AUTH

const[security,setSecurity]= useState(true)


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

const handleSubmit = async() => {
  if (validateForm()) {
    const data = {
      email:email,
      password:password
    }
    console.log(email)
    console.log(password)
    // await AsyncStorage.setItem('user_data',JSON.stringify(data))
    // // Perform form submission
    //  navigation.navigate('HomePage')
      
    //   console.log('Form submitted:', email, password)
try{
  const response = await signInWithEmailAndPassword(auth,email,password)
  console.log(response)
  console.log('you are now signed in')
  
  navigation.navigate('HomePage')
}
catch (error){
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
<View style={{backgroundColor:'#26282c',display:'flex',paddingTop:30,height:700,paddingLeft:30,borderWidth:1}}>
  <Text style={{color:'#9d9fa3'}}>Email Address</Text>
  <Input 
  placeholder={'ikellen2016@gmail.com'}
  mode={'outlined'}
  IconName='email-outline'
  background={'#26282c'}
  value={email}
  onChangeText={setEmail}
  error={!!emailError}
  textColor='white'

  />
     {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

   <Text style={{color:'#9d9fa3'}}>Password</Text>
  <Input

  placeholder={'Your Password'}
  secureTextEntry={security}
  mode={'outlined'}
  background={'#26282c'}
  IconName={'lock-outline'}
  value={password}
  onChangeText={setPassword}
  error={!!passwordError}
  IconName2={security? 'eye-off' :'eye'}

  hidden={()=>{setSecurity(!security)}}

/>
{passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
   

 <Pressable>
  <Text style={{paddingTop:10,paddingLeft:231,color:'#9d9fa3',fontWeight:'bold'}}>ForgetPassword?</Text>
</Pressable>
<View style={{paddingLeft:4,paddingTop:30}}> 
      <TouchableOpacity style={{backgroundColor:'yellow',borderRadius:10,width:340}}    onPress={handleSubmit} >
        <Text style={{padding:10,textAlign:'center',fontWeight:'bold',fontSize:20}}>Sign In</Text>
        </TouchableOpacity>
</View>
<View><Text style={{paddingTop:30,textAlign:'center',color:'#9d9fa3',fontWeight:'bold',fontSize:20}}>or sign in with</Text>
</View>

<View style={{paddingRight:40}}>
     <TouchableOpacity style={{ display:'flex', flexDirection:'row' ,padding:15, borderWidth: 1,marginBottom:20,justifyContent:'center',gap:10,borderColor:'gray'}}>
      <AntDesign name="google" size={24} color="red" style={{}} />
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,color:'#9d9fa3'}}>Google</Text>
        </TouchableOpacity>
        
      <TouchableOpacity style={{display:'flex', flexDirection:'row' ,padding:15, borderWidth: 1, gap: 10,justifyContent:'center',marginBottom:20,borderColor:'gray'}}>
         <AntDesign name="link" size={24} color="white" style={{}} />
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,color:'#9d9fa3'}}>Watch Movie</Text>
        </TouchableOpacity>

</View> 


<View style={{display:'flex',flexDirection:'row',alignItems:'baseline',gap:20}}>
<Pressable>
  <Text style={{paddingTop:10,color:'#9d9fa3',fontWeight:'bold',fontSize:15,paddingLeft:50}}>Don't have an account?</Text>
</Pressable>
<TouchableOpacity style={{}} onPress={()=>navigation.navigate("signup")}>
        <Text style={{fontWeight:'bold',fontSize:20,color:"yellow"}}>Sign Up</Text>
        </TouchableOpacity>
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
