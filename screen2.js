import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity,Dimensions,Image} from 'react-native';
const height=Dimensions.get('screen').height;

export default function Screen2({navigation}) {
  return(
<View>
<View style={{backgroundColor:"#1f2123",paddingLeft:150,paddingTop:50}}>
<Image source={require('../Movi-master/assets/logo.jpg')} style={{width:120}}/>
</View>
<View style={{backgroundColor:'#26282c',display:'flex',paddingTop:100,alignItems:'center',height:700}}>
<Image source={require('../Movi-master/assets/image.jpg')} style={{width:300,height:200,paddingLeft:50}}/>
<View style={{paddingTop:50}}>
    <Text style={{color:"white",fontWeight:'bold',fontSize:30}}>Welcome To Movi</Text>
    <Text style={{color:"white",paddingBottom:80}}>Free Movie Streaming all your needs{'\n'} EveryTime and EveryWhere</Text>
    </View>
    <View style={{paddingLeft:10}}> 
      <TouchableOpacity style={{backgroundColor:'yellow',borderRadius:10,width:350}} onPress={()=>navigation.navigate("HomePage")}>
        <Text style={{padding:"5%",textAlign:'center',fontWeight:'bold',fontSize:20}}>Watch Movie</Text>
        </TouchableOpacity>
</View>
        <View style={{paddingLeft:10}}> 
      <TouchableOpacity style={{width:350}} onPress={()=>navigation.navigate("signin")}>
        <Text style={{padding:"5%",textAlign:'center',fontWeight:'bold',fontSize:20,color:"white"}}>Sign In</Text>
        </TouchableOpacity>

</View>
</View>
  

</View>






  );}
