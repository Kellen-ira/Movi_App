import { StyleSheet, Text, View , ImageBackground} from 'react-native'
import React from 'react'

const List = ({image,Title,Icon,votecount}) => {
  return (
    <View style={{width:250,height:200,paddingTop:20,display:'flex',flexDirection:'row' ,gap:20}}>
      <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} style={{width:250,height:150}}>
      
     
      
        </ImageBackground>
      
     
        <View>
          <Text style={{color:'white',fontSize:17,marginBottom:20}}>{Title}</Text>
        
          
        <Text style={{color:'white',fontSize:15}}>{votecount}</Text>
        </View>
        </View>
    

  )
}

export default List

const styles = StyleSheet.create({})