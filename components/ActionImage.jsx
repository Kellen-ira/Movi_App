import { StyleSheet, Text, View ,   Image} from 'react-native'
import React from 'react'

const ActionImage = ({image}) => {
  return (
    <View style={{width:100,height:400}}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} height={210} width={100}/>
    </View>
  )
}

export default ActionImage

const styles = StyleSheet.create({})