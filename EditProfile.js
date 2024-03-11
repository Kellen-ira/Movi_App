import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View,Image, Pressable,TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { Checkbox} from "react-native-paper";
import Imagecomp from './components/Imagecomp.jsx';
import {Icon} from 'react-native-elements';

export default function Edit({navigation}) {

    return (

<View style={{backgroundColor:"#1f2123",height:800}}>

<View style={{paddingLeft:140,backgroundColor:"#1f2123",paddingTop:40}}>
    <Image source={require('../Movi-master/assets/k.jpg')} style={{width:150,height:150}}/>
</View>
<View style={{}}>
    
    <Imagecomp
    
    label="Name"
    placeholder="Kellen Irakoze"
    mode='flat'
    IconName2="account"
    background="#1f2123"
    color={'yellow'}
    />


    <Imagecomp
    label="Email"
     background="#1f2123"
     placeholder='ikellen2016@gmail.com'
    mode='flat'
    IconName2="email"
    color={'yellow'}
    />

    
    <Imagecomp
    label="Phone Number"
     background={"#1f2123"}
     placeholder="+2508564633"
    mode='flat'
    IconName2="phone"
    color={'yellow'}
    />
    
</View>
<View style={{paddingTop:90,paddingLeft:30}}>
<TouchableOpacity style={{borderWidth:1,padding:20,borderRadius:5,backgroundColor:'yellow',width:350}}>
        <Text style={{textAlign:'center'}}>Save</Text>
    </TouchableOpacity>
</View>
</View>



    )}


