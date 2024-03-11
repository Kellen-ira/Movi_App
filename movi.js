import { StatusBar } from 'expo-status-bar';

       
import { ImageBackground, StyleSheet, Text, View, TouchableWithoutFeedback,Image,Dimensions, Pressable} from 'react-native';
 const height=Dimensions.get('screen').height;       

export default function Movi({navigation}) {
  return (
    <View style={{backgroundColor:"#1f2123",height:100,paddingTop:350,height:height,paddingLeft:100}}>
       
        
        <Pressable onPress={()=>navigation.navigate("screen")}>
        <Image source={require('../Movi-master/assets/logo.jpg')}  style={{height:70,width:200}} />
        
        </Pressable>
    </View>
  );
}