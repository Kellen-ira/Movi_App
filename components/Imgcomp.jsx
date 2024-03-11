
import { StyleSheet, Text, View ,   Image} from 'react-native'
import React from 'react'

const Imgcomp = ({img,title_movie,votecount}) => {
  return (
    <View style={{width:250,height:200,paddingTop:20,paddingLeft:20,display:'flex',flexDirection:'row',gap:20,paddingVertical:20,borderRadius:5}}>
      <Image source={{uri: `https://image.tmdb.org/t/p/w500${img}`}}  style={{width:200,height:250}}/>
      <View style={{gap:20}}>
      <Text style={{color:'#fff',fontSize:18}}>{title_movie}</Text>
      <Text style={{color:'#fff'}}>{votecount}</Text>
      </View>
    </View>
  )
}

export default Imgcomp

const styles = StyleSheet.create({})