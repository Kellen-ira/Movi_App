import { StyleSheet, Text, View ,   Image} from 'react-native'
import React from 'react'

const Popular = ({image}) => {
  return (
    <View style={{width:200,height:200}}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} height={150} width={400}/>
    </View>
  )
}

export default Popular

const styles = StyleSheet.create({})