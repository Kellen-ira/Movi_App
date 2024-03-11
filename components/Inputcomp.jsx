import { StyleSheet, Text, View ,ImageBackground, Pressable} from 'react-native'
import React from 'react'
import PostSFetch from '../Action'

const Inputcomp = ({image,Title, navigation, screen, handlPress}) => {
  // const handlPress=()=>{
  //   navigation.navigate(screen)
  // }
  return (
    <Pressable style={{width:250,height:200,padding:5}} onPress={handlPress}>
      <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} style={{width:250,height:150}}>
        <View style={{display:'flex',alignItems:'flex-end'}}>
       <Text style={{backgroundColor:'yellow',width:40}}>{Title}</Text>
       </View>
        </ImageBackground>
    </Pressable>
  )
}

export default Inputcomp

const styles = StyleSheet.create({})