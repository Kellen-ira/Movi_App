import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity,Dimensions} from 'react-native';
const height=Dimensions.get('screen').height;

export default function Screen1({navigation}) {
  return (

    <ImageBackground source={require('./assets/0x0.webp')}imageStyle={{height:height}}>
        <View style={{paddingTop:400}}>
        <Text style={{color:'white',fontSize:30,fontWeight:'bold',paddingLeft:40}}>Enjoy Your Favourite</Text>
        <Text style={{color:'white',fontSize:30,fontWeight:'bold',paddingLeft:40,paddingBottom:20}}>Movie EveryWhere</Text>

        <Text style={{color:'white',paddingLeft:40,paddingBottom:120,fontSize:17}}>Browse through our collections and {"\n"} discover hundreds of movie and series that{"\n"} you'will love!</Text>
      </View>
      <View style={{paddingLeft:30}}> 
      <TouchableOpacity style={{backgroundColor:'yellow',borderRadius:10,width:350,height:50}}  onPress={() =>
        navigation.navigate("screen2")}>
        <Text style={{padding:"5%",textAlign:'center',fontWeight:'bold',fontSize:20}}>Get Started</Text></TouchableOpacity>
        </View>
    </ImageBackground>
  );
}